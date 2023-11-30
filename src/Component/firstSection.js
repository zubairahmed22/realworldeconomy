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
									<a href="#"><img className="img-responsive" src="assets/images/services/heavy-b-850x500.jpg" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Financial Planing</h3>
									</div>
									<div className="text-content">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing nulla quis fermentum hendrerit, nisi diam viverra feugiat viverra diam.felis tortor
										</p>
										<a href="#" className="btn-text mt-15">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/6-1.jpg" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Saving &amp; Investing</h3>
									</div>
									<div className="text-content">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing nulla quis fermentum hendrerit, nisi diam viverra feugiat viverra diam.felis tortor
										</p>
										<a href="#" className="btn-text mt-15">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="about-block img-scale mb-xs-40 clearfix">
								<figure>
									<a href="#"><img className="img-responsive" src="assets/images/services/service-1.jpg" alt="Photo"/></a>
								</figure>
								<div className="text-box mt-25">
									<div className="box-title mb-15">
										<h3>Taxes Planing</h3>
									</div>
									<div className="text-content">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing nulla quis fermentum hendrerit, nisi diam viverra feugiat viverra diam.felis tortor
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