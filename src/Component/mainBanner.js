import React,{useEffect} from 'react'
import "jquery-ui-dist/jquery-ui"
import $ from "jquery"


const MainBanner = () => {
    

/********************************************

*********************************************/
useEffect(() =>{
  
  var tpj=$;					
  var revapi34;
  tpj(document).ready(function() {
    if(tpj("#rev_slider_34_1").revolution == undefined){
      tpj("#rev_slider_34_1");
    }else{
      revapi34 = tpj("#rev_slider_34_1").show().revolution({
        sliderType:"standard",
        jsFileLocation:"assets/",
        sliderLayout:"fullwidth",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
          keyboardNavigation:"on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          onHoverStop:"on",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
          ,
          arrows : {
  style : "",
  enable : true,
  hide_onmobile : false,
  hide_onleave : false,
  hide_under : 0,
  hide_over : 9999,
  tmp : '',
  left : {
    h_align : "left",
    v_align : "center",
    h_offset : 50,
    v_offset : 0
  },
  right : {
    h_align : "right",
    v_align : "center",
    h_offset : 50,
    v_offset : 0
  }
},
          
bullets:{
 style:"",
 enable:false,
 hide_onmobile:true,
 hide_onleave:true,
 hide_delay:200,
 hide_delay_mobile:1200,
 hide_under:0,
 hide_over:9999,
 tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', 
 direction:"horizontal",
 space:15,       
 h_align:"bottom",
 v_align:"center",
 h_offset:0,
 v_offset:20
}
},
        
viewPort: {
enable:false,
outof:"pause",
visible_area:"80%"
},
responsiveLevels:[1240,1024,778,480],
gridwidth:[1240,1024,778,480],
gridheight:[700,600,500,400],
lazyType:"none",
parallax: {
type:"none",
origo:"enterpoint",
speed:400,
levels:[5,10,15,20,25,30,35,40,45,50],
  },
        
shadow:0,
spinner:"off",
stopLoop:"off",
stopAfterLoops:-1,
stopAtSlide:-1,
shuffle:"off",
autoHeight:"off",
hideThumbsOnMobile:"off",
hideSliderAtLimit:0,
hideCaptionAtLimit:0,
hideAllCaptionAtLilmit:0,
fullWidth: "off",
fullScreen: "on",
debugMode:false,
fallbacks: {
simplifyAll:"off",
nextSlideOnWindowFocus:"off",
disableFocusListener:false,
  }
});
    }
  });	

},[])

  
  
    //////////////////////////
    //	REMOVE THE CAPTIONS //
    /////////////////////////
  


  return (
    
    
    // <!--  Main Banner Start Here-->
    <div className="main-banner banner_up">
      <div id="rev_slider_34_1_wrapper" className="rev_slider_wrapper" data-alias="news-gallery34"> 
        {/* <!-- START REVOLUTION SLIDER 5.0.7 fullwidth mode --> */}
        <div id="rev_slider_34_1" className="rev_slider" data-version="5.0.7">
          <ul>
            {/* <!-- SLIDE  --> */}
            <li data-index="rs-129"  > 
              {/* <!-- MAIN IMAGE -->  */}
              <img src="assets/images/banner/slider1.jpg"  alt=""  className="rev-slidebg" /> 
              {/* <!-- LAYERS --> 
              <!-- LAYER NR. 2 --> */}
              <div className="tp-caption Newspaper-Title tp-resizeme "
                             id="slide-129-layer-1"
                             data-x="['left','left','left','left']" data-hoffset="['100','50','50','30']"
                             data-y="['top','top','top','center']" data-voffset="['165','135','105','0']"
                             data-fontsize="['50','50','50','30']"
                             data-lineheight="['55','55','55','35']"
                             data-width="['600','600','600','420']"
                             data-height="none"
                             data-whitespace="normal"
                             data-transform_idle="o:1;"
                             data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                             data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                             data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                             data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                             data-start="1000"
                             data-splitin="none"
                             data-splitout="none"
                             data-responsive_offset="on" >
                <div className="banner-text"> <span className="sub-text">best websolution</span>
                  <h2>We build your <span>dreams</span> and <span>home</span></h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever. </p>
                  <a className="btn-text" href="about_us.html"> read more</a> </div>
              </div>
            </li>
            {/* <!-- SLIDE  --> */}
            <li data-index="rs-130" data-title="" data-description=""> 
              {/* <!-- MAIN IMAGE -->  */}
              <img src="assets/images/banner/slider2.jpg"  alt=""   className="rev-slidebg"/> 
              {/* <!-- LAYERS --> 
              <!-- LAYER NR. 2 --> */}
              <div className="tp-caption Newspaper-Title   tp-resizeme "
                             id="slide-130-layer-1"
                             data-x="['left','left','left','left']" data-hoffset="['100','50','50','30']"
                             data-y="['top','top','top','center']" data-voffset="['165','135','105','0']"
                             data-fontsize="['50','50','50','30']"
                             data-lineheight="['55','55','55','35']"
                             data-width="['600','600','600','420']"
                             data-height="none"
                             data-whitespace="normal"
                             data-transform_idle="o:1;"
                             data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                             data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                             data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                             data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                             data-start="1000"
                             data-splitin="none"
                             data-splitout="none"
                             data-responsive_offset="on">
                <div className="banner-text"> <span className="sub-text">best websolution</span>
                  <h2>We build your <span>dreams</span> and <span>home</span></h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever. </p>
                  <a className="btn-text" href="#"> read more</a> </div>
              </div>
            </li>
            {/* <!-- SLIDE  --> */}
            <li data-index="rs-131"> 
              {/* <!-- MAIN IMAGE -->  */}
              <img src="assets/images/banner/slider3.jpg"  alt=""   className="rev-slidebg " /> 
              {/* <!-- LAYERS --> 
              <!-- LAYER NR. 2 --> */}
              <div className="tp-caption Newspaper-Title   tp-resizeme "
                             id="slide-131-layer-1"
                             data-x="['left','left','left','left']" data-hoffset="['100','50','50','30']"
                             data-y="['top','top','top','center']" data-voffset="['165','135','105','0']"
                             data-fontsize="['50','50','50','30']"
                             data-lineheight="['55','55','55','35']"
                             data-width="['600','600','600','420']"
                             data-height="none"
                             data-whitespace="normal"
                             data-transform_idle="o:1;"
                             data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                             data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                             data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                             data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                             data-start="1000"
                             data-splitin="none"
                             data-splitout="none"
                             data-responsive_offset="on">
                <div className="banner-text"> <span className="sub-text">best websolution</span>
                  <h2>We build your <span>dreams</span> and <span>home</span></h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever. </p>
                  <a className="btn-text" href="about_us.html"> read more</a> </div>
              </div>
            </li>
            {/* <!-- SLIDE  --> */}
          </ul>
          <div className="tp-bannertimer tp-bottom"></div>
        </div>
      </div>
    </div>
   
  


  )
            }

export default MainBanner