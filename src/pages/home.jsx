import React from 'react'
import Video from '../components/home/video'
import HomeHeroTxt from '../components/home/homeHerotxt'
import HomeCarousel from '../components/home/ImageCarousel'
import Services from './Services'
import MissionVision from '../components/home/mission'
import Slide from "../components/home/slide"
import Footer from '../components/navigation/footer'

import WaveDivider from '../components/navigation/wavedivider'


const home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      
      <div className='h-screen w-screen fixed text-white overflow-x-hidden'>
        <Video/>
      </div>
      
      <div className='flex-1'> {/* This grows to fill space */}
        <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden'> 
          <HomeHeroTxt/> 
        </div>

        <section>
          <div>
            <Slide/>
          </div>
        </section>

        <section>
          <div>
            <MissionVision/>
          </div>
        </section>

        
      </div>
       
    


    

    </div>
  );
}

export default home;