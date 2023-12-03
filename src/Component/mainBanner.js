import React,{useEffect} from 'react'
import "jquery-ui-dist/jquery-ui"
import $ from "jquery"


const MainBanner = () => {
    

/********************************************

*********************************************/
useEffect(() =>{
  

},[])

  
  
    //////////////////////////
    //	REMOVE THE CAPTIONS //
    /////////////////////////
  


  return (
    
    <section className="banner" id="home" style={{ backgroundImage: "url(assets/images/banner/bg.png)" }}>
        <div className="container">
            <div className="banner__wrapper">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner__content" data-aos="fade-right" data-aos-duration="1000">
                            <h1 className="text-uppercase">Real World<br/> Invest Company was created  <br/><span>with the idea of bridging the real world with the virtual world</span></h1>
                            <p className='HeroPtage'>enabling both investors and ordinary people to invest in secure assets. Our mission is to create a better, more just world of investments without limits, providing an easy, transparent, and secure way of investing.
</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__thumb" data-aos="fade-up" data-aos-duration="1000">
                            <img src="assets/images/finance_illustration.png" alt="banner Image"/>

                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  


  )
            }

export default MainBanner