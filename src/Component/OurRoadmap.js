import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const OurRoadmap = () => {

  useEffect(() =>{
		AOS.init({duration: 1000})
		
		},[])

  return (
    <div id="story-section" className="ptb ptb-xs-60 gray-bg">
    <div className="container">
      
      <div className="row">
        <div className='textcontainer' data-aos="fade-down">
      <h2 style={{textAlign: "center"}}>Roadmap Company Development Plan</h2>
      </div>
        <div className="col-sm-12">
          <div className="ui-timline-container">
            <div className="ui-timeline">
              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                   
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 1 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>
                    <div className="tl-content" data-aos="fade-up">
                      <h4 className="tl-tile text-primary">Legal Preparation</h4>
                      <p className='roadMap_text'> Legal Consultation: Engage legal experts to understand all aspects of operating such a company.
                          Legal Risk Analysis: Conduct a comprehensive analysis of legal and financial risks.
 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 2 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-warning"> <img src="assets/images/Finance_logo.png" className='logoicon'/></div>
                    <div className="tl-content" data-aos="fade-down">
                      <h4 className="tl-tile text-danger"> Entry into the Financial Market</h4>
                      <p className='roadMap_text'> ICO on Coinmarketcap: Launch Initial Coin Offering (ICO) on Coinmarketcap,
                         allowing investors to purchase shares in the company's profits. 
                         Funds raised will be invested in platform development, projects, and marketing.
 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 3 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-success"> <img src="assets/images/Finance_logo.png" className='logoicon'/></div>
                    <div className="tl-content" data-aos="fade-up">
                      <h4 className="tl-tile text-warning">Platform and Project Development
</h4>
                      <p className='roadMap_text'> Platform Creation: Establish the foundational platform with the ability to sell shares,
                          wallets, and various tools for purchasing shares and tokens.
                          Launch of the First Project: Commence the first project and sell shares associated with it.
 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 4  </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-danger"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>
                    <div className="tl-content" data-aos="fade-right">
                      <h4 className="tl-tile text-success">Expansion to Cryptocurrency Exchanges</h4>
                      <p className='roadMap_text'> Listing on Coinmarketcap and Coingecko: Add our company to Coinmarketcap and Coingecko platforms.
Listing on Various Exchanges: Expand the availability of our tokens by listing </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 5 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-success"> <img src="assets/images/Finance_logo.png" className='logoicon'/></div>
                    <div className="tl-content" data-aos="fade-down">
                      <h4 className="tl-tile text-warning">Introduction of New Products
</h4>
                      <p className='roadMap_text'> Launch of Real Gold, Platinum, Silver: Introduce new tokenized products representing different assets (e.g., gold, platinum, silver).
                          Introduction of Real House: Tokenization of real estate. </p>

                    </div>
                  </div>
                </div>
              </div>

              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 6  </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-danger"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>
                    <div className="tl-content" data-aos="fade-up">
                      <h4 className="tl-tile text-success">Application and New Product Development
</h4>
                      <p className='roadMap_text'> Launch of Real Energy, Diamonds: Introduce tokens related to energy and diamonds.
                          Creation of Real Bank: Establish our own bank/marketplace.
                          Introduction of Own Currencies: Launch proprietary currencies such as Real USD, Real EURO, Real PLN, based on market needs.
 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 7 </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-success"> <img src="assets/images/Finance_logo.png" className='logoicon'/> </div>
                    <div className="tl-content" data-aos="fade-down">
                      <h4 className="tl-tile text-warning">Future Project Proposals
</h4>
                      <p className='roadMap_text'> Developing Projects: Propose the development of projects such as "watch to earn,
                        " "play to earn," proprietary exchange, proprietary bank,
                         viewing real estate data in the virtual world, advancing Web 3.0, masternodes, etc.

 </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="tl-item alt">
                <div className="tl-body">
                  <div className="tl-entry">
                    <div className="tl-time"> Phase 8  </div>
                    <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-danger"><img src="assets/images/Finance_logo.png" className='logoicon'/></div>
                    <div className="tl-content" data-aos="fade-up">
                      <h4 className="tl-tile text-success">Infrastructure Expansion</h4>
                      <p className='roadMap_text'> Websites and Wallets: Expand websites and cryptocurrency wallets.
                          Expand Exchanges and Liquidity on Pancake: Increase token availability on different exchanges and enhance liquidity on the Pancake platform.
                          Integration with Cryptocurrency Bridges: Connect our site with various bridges enabling the exchange of other cryptocurrencies for our tokens.
 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
