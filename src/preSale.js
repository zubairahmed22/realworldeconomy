import {useState} from 'react'

import zmk from "./zkEVM.svg"
import toggle from "./toggle.svg"
import CountUp from 'react-countup';

import "./freesale.css"

const PreSale = () => {
  
  const [showTab, setShowtab] = useState(1)

      return (
        <>
        <section className="inner-intro  padding bg-img1 overlay-dark light-color">
				<div className="container">
					<div className="row title">
						<h1>PreSale</h1>
						<div className="page-breadcrumb">
							
						</div>
					</div>
				</div>
			</section>
      
{/*            
          <div className='RightMain'>
            
        
          
          <div className='firtone'>
          <div className='Birdgetext'> 
          <h3>Swapping</h3>
          
          </div>
          <div className='buttoncollection'>
            <div className='bgDiv'>
              <div className='button1'> Amount Raised
              <p> $<CountUp end={1452433} duration={5}/></p>
              </div>
              <div className='button1'>Remaning Token
                <p><CountUp end={34545466} duration={5}/></p>
              </div>
              
            </div>
          </div>
    
          
            
            <div className='etherum'>
              <h3>Buy now before price increased</h3>
            <div className='divone'>
            
             </div>
             
              
           
            </div>
            
             <div className='buttonbox'>
          
              <div className='buttonbox1'>
              <p className='percentage'>70% sold</p>
              </div>
             </div>
             <div className='tranferTwo'>
             
              <div className='mainBox'>
                <p>Next Stage Price <span>2039 BUSD</span></p>
              </div>

              <div className='boxi'>
              <p> Total Tokens Sold <span> 324234</span></p>
                </div>
             </div>
             <div className='CurrencyBTN'> 
             <button> <img src='assets/images/bnb.svg' alt='BNB icon' className='bnb_icon'/>BNB</button>
             <button><img src='assets/images/usdt.svg' alt='USDT icon'/>USDT</button>
             </div>
             <div className='lastDiv'>
              Swapping
             </div>
          </div>
          </div>   */}
       
       <div className='RightMain'>
          <div className='secondmainDiv'>
            <div className='topSwapDiv'>
              <h6>Swap</h6>
              <p>Swap any assets simply and securely with <br/>coin-Ex self developed Algorithm</p>
            </div>
            <div className='btnList'><button className={showTab === 1? "navLink":""} onClick={() => setShowtab(1)}>button1</button> 
            <button className={showTab === 2? "navLink":""} onClick={ () => setShowtab(2)}>btn2</button>
             <button className={showTab === 3? "navLink":""} onClick={ () => setShowtab(3)}>btn3</button> </div>
            <div className={showTab ===1? 'component active' : "component" }>
            <div className='ButtonContainer'>
              <div className='divItem'>
              <div className='iconDiv'>
              <img src='assets/images/bnb.svg' alt='BNB icon' className='bnbimage_icon'/> 
              <p>BUSD</p>
              </div>
              <p>1,945.58</p> 
              </div>

              <div className='divItemLeft'>
              <p className='balance_text'> 
                <span className='balance'>Bal. </span>10.345.28 BUSD</p>
              <p>$1946.30</p>
              </div>

            </div>

            <div className='toggleBox'>
              <button>
              <img src={toggle}  alt="toggle icon" className='toggle_icon'/>
              </button>
             
            </div>
            <div className='ButtonContainer1'>
              <div className='divItem'>
              <div className='iconDiv'>
              <img src={zmk} alt='BNB icon' className='bnbimage_icon1'/> 
              <p>MATIC</p>
              </div>
              <p>842.31</p> 
              </div>

              <div className='divItemLeft'>
              <p className='balance_text'> 
                <span className='balance'>Bal. </span>11.892.74 MATIC</p>
              <p>984.16</p>
              </div>

            </div>
            <div className='coversion'>
              <p>Conversion Rate</p>
              <p>1BUSD = 0.799059 MATIC</p>
            </div>

            <div className='ConversionList'>
              <div className='coversionItem'>
                <p>conversion</p>
                <h5>$2.48</h5>
              </div>
              <div className='coversionItem'>
                <p>Total Expected After Fees</p>
                <h5>$714.98</h5>
              </div>
              <div className='coversionItem'>
                <p>The Least You'll Get at 100% Slippage</p>
                <h5>$714.98</h5>
              </div>
            </div>
            </div>

            <div className={showTab ===2? 'component active' : "component" }>
            <div className='ButtonContainer'>
              <div className='divItem'>
              <div className='iconDiv'>
              <img src='assets/images/bnb.svg' alt='BNB icon' className='bnbimage_icon'/> 
              <p>BUSD2</p>
              </div>
              <p>1,945.58</p> 
              </div>

              <div className='divItemLeft'>
              <p className='balance_text'> 
                <span className='balance'>Bal. </span>10.345.28 BUSD</p>
              <p>$1946.30</p>
              </div>

            </div>

            <div className='toggleBox'>
              <button>
              <img src={toggle}  alt="toggle icon" className='toggle_icon'/>
              </button>
             
            </div>
            <div className='ButtonContainer1'>
              <div className='divItem'>
              <div className='iconDiv'>
              <img src={zmk} alt='BNB icon' className='bnbimage_icon1'/> 
              <p>MATIC</p>
              </div>
              <p>842.31</p> 
              </div>

              <div className='divItemLeft'>
              <p className='balance_text'> 
                <span className='balance'>Bal. </span>11.892.74 MATIC</p>
              <p>984.16</p>
              </div>

            </div>
            <div className='coversion'>
              <p>Conversion Rate</p>
              <p>1BUSD = 0.799059 MATIC</p>
            </div>

            <div className='ConversionList'>
              <div className='coversionItem'>
                <p>conversion</p>
                <h5>$2.48</h5>
              </div>
              <div className='coversionItem'>
                <p>Total Expected After Fees</p>
                <h5>$714.98</h5>
              </div>
              <div className='coversionItem'>
                <p>The Least You'll Get at 100% Slippage</p>
                <h5>$714.98</h5>
              </div>
            </div>
            </div>
            <div className={showTab ===3? 'component active' : "component" }>
            <div className='ButtonContainer'>
              <div className='divItem'>
              <div className='iconDiv'>
              <img src='assets/images/bnb.svg' alt='BNB icon' className='bnbimage_icon'/> 
              <p>BUSD3</p>
              </div>
              <p>1,945.58</p> 
              </div>

              <div className='divItemLeft'>
              <p className='balance_text'> 
                <span className='balance'>Bal. </span>10.345.28 BUSD</p>
              <p>$1946.30</p>
              </div>

            </div>

            <div className='toggleBox'>
              <button>
              <img src={toggle}  alt="toggle icon" className='toggle_icon'/>
              </button>
             
            </div>
            <div className='ButtonContainer1'>
              <div className='divItem'>
              <div className='iconDiv'>
              <img src={zmk} alt='BNB icon' className='bnbimage_icon1'/> 
              <p>MATIC</p>
              </div>
              <p>842.31</p> 
              </div>

              <div className='divItemLeft'>
              <p className='balance_text'> 
                <span className='balance'>Bal. </span>11.892.74 MATIC</p>
              <p>984.16</p>
              </div>

            </div>
            <div className='coversion'>
              <p>Conversion Rate</p>
              <p>1BUSD = 0.799059 MATIC</p>
            </div>

            <div className='ConversionList'>
              <div className='coversionItem'>
                <p>conversion</p>
                <h5>$2.48</h5>
              </div>
              <div className='coversionItem'>
                <p>Total Expected After Fees</p>
                <h5>$714.98</h5>
              </div>
              <div className='coversionItem'>
                <p>The Least You'll Get at 100% Slippage</p>
                <h5>$714.98</h5>
              </div>
            </div>
            </div>
            <div className='bntDiv'>Connect Wallet</div>
          </div>
           </div>  
          
          </>
      )
    }
    
    


export default PreSale