import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Account from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../CSS/Navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../Images/cookify_Logo.png';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';

function Navbar({ isLoggedIn, handleLogout, handleColorChange }) {
    const [sidebar, setSidebar] = useState(false);
    const [expandNotch, setExpandNotch] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const toggleNotch = () => setExpandNotch(!expandNotch);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='d_left'>
                        <Link to='#' className='d_menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <div className='d_logo'>
                        <img src={Logo} className='logo_nav' alt="Logo" />
                    </div>
                    <div className='d_mid'>
                        <div className={`notch ${expandNotch ? 'expanded' : ''}`} onClick={toggleNotch}>
                            <div className='circle-buttons'>
                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #f5f5f5, #9679ff)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to left, #f5f5f5, #9679ff)')}
                                ></div>


                                <div
                                    className='circle-button'
                                    style={{
                                        background: 'linear-gradient(to right, #1a85ff, #9933ff)' // Replace with your desired gradient colors
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #1a85ff, #9933ff)')} // Set background color to the gradient
                                ></div>

                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #00ff00, #ffff00)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #00ff00, #ffff00)')}
                                ></div>


                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #ff1a1a, #ff66cc)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #ff1a1a, #ff66cc)')}
                                ></div>
                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #8b0000, #ff8c00)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #8b0000, #ff8c00)')}
                                ></div>



                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right,#060707,#003737,#004646,#003737,#060707)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right,#060707,#003737,#004646,#003737,#060707)', '#65c382')}
                                ></div>



                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #191970, #9932cc, #000000)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #191970, #9932cc, #000000)')}
                                ></div>

                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #000080, #800080)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #000080, #800080)', '#d2d2dc')}
                                ></div>

                                {/*  */}
                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #000033, #330033, #000000)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #000033, #330033, #000000)', '#d5a5d5')}
                                ></div>
                                <div
                                    className="circle-button"
                                    style={{
                                        background: 'linear-gradient(to right, #2a1f1f, #000000)',
                                    }}
                                    onClick={() => handleColorChange('linear-gradient(to right, #2a1f1f, #000000)', '#eeb8b8')}
                                ></div>
                            </div>
                        </div>
                    </div>




                    <div className='d_right'>
                        <Link to='./profile'>
                            <Account style={{ fontSize: "2.6rem", color: "#fff", borderRadius: "50%", backgroundColor: "#4caf50", boxShadow: " rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }} />
                        </Link>
                        {/* <button className='d_btn'>Login</button> */}
                        <div className='ddd_right'>
                            {/* Render the button based on the isLoggedIn prop */}
                            {isLoggedIn ? (
                                <Button onClick={handleLogout} style={{ color: "#fff", backgroundColor: "#4caf50", boxShadow: " rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }} >Logout</Button>
                            ) : (
                                <Link to="./login">
                                    <Button variant="contained" style={{ color: "#fff", backgroundColor: "#4caf50", boxShadow: " rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }} >Login</Button>
                                </Link>
                            )}
                        </div>

                    </div>
                </div>

                {/* Color cycle */}



                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='d_menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span id='d_nav_span'>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider >
        </>
    );
}

export default Navbar;
