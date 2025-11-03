import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="">
            <div className="lg:w-36 w-24">
              <svg
  className="w-full px-2"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 50"
>
  <text
    x="0"
    y="35"
    fill="white"
    fontSize="35"
    fontFamily="nimbus"
    fontWeight="bold"
  
  >
    AHB
  </text>
</svg>

            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-28 h-20 w-20 lg:w-32 relative cursor-pointer "
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#80A1BA]"></div>
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#80A1BA]"></div>
          </div>
        </div>
        <div className=" py-36 lg:py-0"  onClick={() => {
              setNavOpen(false);
            }}>
          <Link to="/services"> <div className="link origin-top relative border-t-1 border-white">
        <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase cursor-pointer">
              Services
            </h1>
            <div className="moveLink absolute text-black  flex top-0 bg-[#80A1BA]">
              <div className="moveX flex items-center  ">
          <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[1]  lg:pt-10 pt-4 uppercase">
                  SEE everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                
                
              </div>
            </div>
          </div> </Link>
       <Link to="/about"> <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              About
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#80A1BA]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  know us
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
               
              </div>
            </div>
          </div>
          </Link>  
          <Link to="/contact"> <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#80A1BA]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  send us a fax
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
               
              </div>
            </div>
          </div>
          </Link> 
    <Link to ="/Blogs"> <div className="link origin-top relative border-y-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Blogs
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#80A1BA]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  read articles
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              
              </div>
            </div>
          </div> </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
