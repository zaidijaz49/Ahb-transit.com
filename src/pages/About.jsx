import React from "react";
import Navbar from "../components/navigation/navbar"
import Zafar from "../../public/pics/zafar_iqbal_pic.jpg"
import Shoaib from "../../public/pics/shoaib.jpg" 

function About() {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-[#80A1BA]">
    
        <div className="headings w-screen bg-[#80A1BA]  mt-30 md:mt-30 px-4">
          <h1 className="font-[font5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Driven by excellence,
          </h1>
          <h1 className="font-[font5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Defined by comfort.
          </h1>
          <p className="font-[font5] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-5 px-4">
            "Experience the art of luxury travel where every detail, from the <br className="hidden md:block" />
            smooth ride to the courteous chauffeur, is designed for your
            ultimate comfort"
          </p>
          
          <div className="pics bg-[#80A1BA] w-full h-auto flex flex-col md:flex-row p-5 gap-5 md:gap-0 justify-evenly">
            <div className="card1 w-full md:w-1/5 h-[40vh] md:h-[55vh]">
              <img 
                className="w-full h-full object-cover rounded-4xl" 
                src="https://images.unsplash.com/photo-1698840059740-ba83e510733b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhdWZmZXVyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" 
                alt="" 
              />
            </div>
            <div className="card1 w-full md:w-1/5 h-[40vh] md:h-[55vh] rounded-4xl">
              <img 
                className="object-cover h-full w-full rounded-4xl" 
                src="https://images.unsplash.com/photo-1659389952410-59fc1f039d27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8enVyaWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" 
                alt="" 
              />
            </div>
            <div className="card1 w-full md:w-1/5 h-[40vh] md:h-[55vh] rounded-4xl">
              <img 
                className="object-cover h-full w-full rounded-4xl" 
                src="https://images.pexels.com/photos/5717573/pexels-photo-5717573.jpeg?_gl=1*d3g9cu*_ga*MTEzNDA0MTgyNC4xNzU1MTUzNzE3*_ga_8JE65Q40S6*czE3NjE5MzM1MjckbzEyJGcxJHQxNzYxOTMzNTc2JGoxMSRsMCRoMA.." 
                alt="" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="div2">
        <div className="p-5 px-4">
          <h1 className="font-[font5] text-2xl sm:text-3xl md:text-4xl mt-10 bg-[#80A1BA] w-fit rounded-2xl ml-2 p-1">
            ABOUT AHB
          </h1>
          <p className="font-[font6] text-center text-base sm:text-lg md:text-xl lg:text-2xl p-4 md:p-10">
            With over 5 Years of experience, we specialize in delivering tailored <br className="hidden md:block" />
            solutions that drive success across industries like
            finance, technology, and operations.<br className="hidden md:block" /> 
            Our dedicated team is focused on 
            accelerating growth and <br className="hidden md:block" />
            helping your business thrive in an
            ever-changing market. 
          </p>
        </div>
      </div>

      <div className="w-screen min-h-screen pb-10">
        <div className="p-4">
          <h1 className="font-[font5] text-2xl sm:text-3xl md:text-4xl mt-10 bg-[#80A1BA] w-fit rounded-2xl ml-2 p-1">
            Our team
          </h1>
        </div>
        
        <div className="pics w-full h-auto flex flex-col md:flex-row p-5 gap-8 md:gap-5 justify-evenly items-center">
          <div className="card1 w-full sm:w-3/4 md:w-1/5 h-auto">
            <h1 className="font-[font5] text-center text-2xl sm:text-3xl md:text-4xl mb-2 bg-[#80A1BA] rounded-2xl p-2">
              ZAFAR IQBAL
            </h1>
            <img 
              className="object-cover h-[50vh] md:h-[70vh] w-full rounded-4xl" 
              src={Zafar} 
              alt="Zafar Iqbal"
            />
            <h6 className="font-[font5] text-center text-xl md:text-2xl bg-[#80A1BA] mt-2 rounded-2xl p-2">
              CEO
            </h6>
          </div>

          <div className="w-full sm:w-3/4 md:w-1/5 h-auto">
            <h1 className="font-[font5] text-center text-2xl sm:text-3xl md:text-4xl mb-2 bg-[#80A1BA] rounded-2xl ">
              ZOHAIB SAEED
            </h1>
            <img 
              className="object-cover h-[50vh] md:h-[70vh] w-full rounded-4xl" 
              src={Shoaib} 
              alt="Zohaib Saeed"
            />
            <h6 className="font-[font5] text-center text-xl md:text-2xl bg-[#80A1BA] mt-2 rounded-2xl p-2">
              FOUNDER
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;