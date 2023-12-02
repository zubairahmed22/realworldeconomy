import React from 'react'
import Availablity from './Component/availablity';
import FirstSection from './Component/firstSection';

import MainBanner from './Component/mainBanner';
import { OurService } from './Component/ourService';
import Faq from './Component/Faq';

export const Home = () => {
  return (
    <div>
<MainBanner/>
  <FirstSection/>
  <Availablity/>
  {/* <Team/> */}
  <OurService/>
  <Faq/>
    </div>
  )
}
