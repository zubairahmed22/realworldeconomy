import React from 'react'

export const Contact = () => {
  return (
    <>
    <section className="inner-intro bg-img light-color overlay-before parallax-background">
    <div className="container">
      <div className="row title">
<h1>contact</h1>
      </div>
    </div>
  </section>
 
  <section className="padding ptb-xs-60">
				<div className="container">

					<div className="row">

						<div className="col-sm-8">

							<div className="headeing pb-30">
								<h2>Get in Touch</h2>
								<span className="b-line l-left line-h"></span>
							</div>

							<form className="contact-form " id="contact">
								
								<div id="success">
									<div role="alert" className="alert alert-success">
										<strong>Thanks</strong> for using our template. Your message has been sent.
									</div>
								</div>
								
								<div className="row">
									<div className="col-sm-6">
										<div className="form-field">
											<input className="input-sm form-full" id="name" type="text" name="form-name" placeholder="Your Name"/>
										</div>
										<div className="form-field">
											<input className="input-sm form-full" id="email" type="text" name="form-email" placeholder="Email"/>
										</div>
										<div className="form-field">
											<input className="input-sm form-full" id="sub" type="text" name="form-subject" placeholder="Subject"/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-field">
											<textarea className="form-full" id="message" rows="7" name="form-message" placeholder="Your Message" ></textarea>
										</div>
									</div>
									<div className="col-sm-12 mt-30">
										<button className="btn-text" type="button" id="submit" name="button">
											Send Message
										</button>
									</div>
								</div>
							</form>
							
						</div>

						<div className="col-sm-4 contact">
							<div className="headeing pb-20">
								<h2>Contact Info</h2>
								<span className="b-line l-left line-h"></span>
							</div>
							<div className="contact-info">

								<ul className="info">
									<li>
										<div className="icon ion-ios-location"></div>
										<div className="content">
											<p>
												123 Main Street, St. NW Ste,
											</p>
											<p>
												1 Washington, DC,USA.
											</p>
										</div>
									</li>

									<li>
										<div className="icon ion-android-call"></div>
										<div className="content">
											<p>
												200 256 265 000
											</p>
											<p>
												200 256 265 000
											</p>
										</div>
									</li>
									<li>
										<div className="icon ion-ios-email"></div>
										<div className="content">
											<p>
												Support@yourmail.com
											</p>
											<p>
												http://admin@.com
											</p>
										</div>
									</li>
								</ul>
								<ul className="event-social">
									<li>
										<a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
				

			</section>
    </>
  )
}
