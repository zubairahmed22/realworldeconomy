import React from 'react'

import onbording from "./zkEVM-onboarding-play.svg" 
import birdgeboxicon from "./bridge-mode-toggle.svg"
import ethChain from "./eth-chain.svg"
import zkevm from "./zkEVM (1).svg"
import Eth from "./eth (1).svg"
import imagebox from "./empty-txns.png"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./freesale.css"

const freeSale = () => {
  
   

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
      
           
          <div className='RightMain'>
            
        
          
          <div className='firtone'>
          <div className='Birdgetext'> 
          <h3>Swapping</h3>
          
          </div>
          <div className='buttoncollection'>
            <div className='bgDiv'>
              <div className='button1'> Amount Raised
              <p>$1,452,433.87</p>
              </div>
              <div className='button1'>Remaning Token
                <p>3454546,656</p>
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
          </div>  
          {/* <div className='rightBox'>
            <div className='headerbox'>
              <p>Recent Transactions</p>
              <span>View All</span>
            </div>
            <div className='imageBox'>
              <img src={imagebox}/>
              <p>There are no pending transactions, but you can start one with a single click.</p>
            </div>
          </div> */}
          
          
            
          
          </>
      )
    }
    
    


export default freeSale