import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    
		<header id="home" className="welcome-area">
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        
                        <div className="logo">
                            <Link to={"/"}><img src="assets/images/Finance_logo.png" alt="Logo"/></Link> 
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
                    <li> <Link className="linkstyle" to={"/"}>Home </Link>
                    
              </li>
              <li> <Link className="linkstyle" to={"/about"}>About us</Link>
                
              </li>
              <li> <a href="">services </a>
               
              </li>
             
            <li> <a href="">blog </a>
                
              </li>
              <li> <a href="">pages </a>
             
              </li>
              <li> <a href="#!">Shop </a>  
               
                
                
              </li>
              <li> <Link className="linkstyle" to={"/contact"}>Contact us</Link>
                
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
