
import {useState} from 'react'

import './index.css'

const NavBar=()=>{
    const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

    return(
        <nav className="navbar">
            <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleMenuClick}>
                <i className="fas fa-bars icon"></i>
            </div>
            <div className="space"></div>
            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#adavture-section">About</a></li>
                <li><a href="#Membership-section">Schedules</a></li>
                <li><a href="#Membership-section">Membership</a></li>
                <li><a href="#discount-section">Pricing</a></li>
            </ul>
            <ul className="nav-bar-courses-container">
                <li><a href="#discount-section">Offers</a></li>
                <li><a href="#discount-section"><button>Courses</button></a></li>
            </ul>
        </nav>
    )
}

export default NavBar