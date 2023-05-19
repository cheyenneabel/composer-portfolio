import { Link, NavLink } from 'react-router-dom';
import './index.css';
import Logo from '../../../../public/images/Jacob_Psenicka.png';


const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link 
                className='logo' 
                to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to='/'>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="about-link" 
                    to="/about">
                </NavLink> 
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="portfolio-link" 
                    to="/contact">
                </NavLink> 
            </nav>
        </div>
    )
} 

export default NavBar;