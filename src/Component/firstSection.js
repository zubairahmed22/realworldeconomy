import React from 'react'
import "jquery-ui-dist/jquery-ui"
import $ from "jquery"

const FirstSection = () => {
  return (
    <section className="services-section__block pt-90 pb-70 ptb-xs-60">
		      <div className="container">
			  <div className="row">
						<div className="col-sm-4">
							<div className="about-block img-scale  mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/servicepng1.png" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Unique Value Proposition</h3>
									</div>
									<div className="text-content">
										<p>
										Our investments are based solely on real assets such as gold, silver, real estate, and thriving businesses. By utilizing cryptocurrency and blockchain technology, we enable anyone, even those with modest means,
										 to participate in investments, contributing to greater democratization of the investment world.
										</p>
										<a href="#" className="btn-text mt-15">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/goalpng.png" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Company Goal</h3>
									</div>
									<div className="text-content">
										<p>
											
Our goal is to facilitate investment in secure assets that might be otherwise inaccessible to many.
 We want everyone, regardless of location or the amount of available funds, to participate in investments that generate stable profits.

										</p>
										<a href="#" className="btn-text mt-15">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/goldpng.png" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Concept of Gold-Backed Cryptocurrency</h3>
									</div>
									<div className="text-content">
										<p>
										One of our long-term goals is to create a gold-backed currency, providing a stable solution for countries facing inflationary issues. We aim to base the currency's value on real assets,
										 eliminating the need to rely on the arbitrary value of paper money.
										</p>
										<a href="#" className="btn-text mt-15">Read More</a>
									</div>
								</div>
							</div>
						</div>


						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/newapproch.jpg" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>New Approach to Investments</h3>
									</div>
									<div className="text-content">
										<p>
										Real World Invest Company seeks to transform how people invest by eliminating speculation in favor of secured,
										 real assets. We reject investments in cryptocurrencies based solely on code, 
										focusing instead on investments with real value and the potential for profits.
										</p>
										<a href="#" className="btn-text mt-15">Read More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
		</div>
		</section>
  )
}

export default FirstSection