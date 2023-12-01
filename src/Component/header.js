import React from 'react'

export const HeaderComponent = () => {
  return (
    
		<header id="home" className="welcome-area">
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        
                        <div className="logo">
                            <a href="index1.html"> <img src="assets/images/logo_re1.png" alt="Logo"/> </a>
                        </div>
                        
                    </div>
                    <div className="col-sm-9">
                       
                        <div className="mainmenu">
                            <div className="navbar navbar-nobg">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav navbar-right">
                    <li> <a>Home </a>
                    
              </li>
              <li> <a>About us</a>
                
              </li>
              <li> <a href="">services </a>
               
              </li>
             
            <li> <a href="">blog </a>
                
              </li>
              <li> <a href="">pages </a>
             
              </li>
              <li> <a href="#!">Shop </a>  
               
                
                
              </li>
              <li> <a href="#!">Contact us </a>
                
              </li>
             
            </ul>
            </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    
    </header>
  )
}
