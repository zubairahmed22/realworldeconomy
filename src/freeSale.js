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
						<h1>Free Sale</h1>
						<div className="page-breadcrumb">
							
						</div>
					</div>
				</div>
			</section>
        <div className='mainDev'> 
           
          <div className='RightMain'>
            
          <div className='Rightdev1'>
          
          <div className='firtone'>
          <div className='Birdgetext'> 
          <h3>Swapping</h3>
          
          </div>
          <div className='buttoncollection'>
            <div className='bgDiv'>
              <button className='button1'>Native Bridge</button>
              
            </div>
          </div>
    
          <div className='secondSection' >
            <div className='transfer'>
              Transfer from
            </div>
            <div className='etherum'>
            <div className='divone'>
             <img src={ethChain }/>
             <h4>Ethereum</h4>
             </div>
             <div className='secondone'>
              <p>Balance:<span>0</span></p>
             </div>
              
           
            </div>
            <div className='secondEthereum'>
              <div className='leftEthereum'>
                <img src={Eth}/> <span>ETH</span>
                {/* <KeyboardArrowDownIcon
                sx={{fontSize: "16px"}}
                /> */}
              </div>
              <div className='RightEthereum'>
                <span>0.00</span>
                <div className='BtnContainer'>
                  <button>25%</button>
                  <button>50%</button>
                  <button>MAX</button>
                  </div>
              </div>
             </div>
             <div className='buttonbox'>
              <button>
                <img src={birdgeboxicon}/>
              </button>
             </div>
             <div className='tranferTwo'>
              Transfer To
              <div className='mainBox'>
                <div className='boxi'>
                <img src={zkevm}/> <p>zkEVM</p>
                </div>
               
                <p>balance:<span>0</span></p>
              </div>
             </div>
             <div className='lastDiv'>
              Swaping
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
          
          </div> 
          </div>   
          </div>
          </>
      )
    }
    
    


export default freeSale