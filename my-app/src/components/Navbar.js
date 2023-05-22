import React from 'react'
import myImage from './myImage.png';


export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navStyle">
            <a className="brand-navbar" href="#">
            <img src={myImage} alt="My Image" height="60px" />
              {/* <img src="https://e1.pxfuel.com/desktop-wallpaper/757/423/desktop-wallpaper-crime-scene-cross-backgrounds-crime-in.jpg" alt="Responsive image" height="60px"/> */}
              </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
                <span><i className="fas fa-align-right iconStyle"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="mainMenu">
                <ul className="navbar-nav ml-auto navList">
                    <li className="nav-item active">
                      <a href="#" className="nav-link"><i className="fas fa-home"></i>HOME<span className="sr-only">(current)</span></a></li>
                    <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          <i className="fas fa-cogs"></i>About Us</a>
                    </li>
                
                    <li className="nav-item">
                        <a href="contact.html" className="nav-link"><i className="fas fa-phone"></i>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}
