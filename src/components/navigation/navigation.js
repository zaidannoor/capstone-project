import React from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

function Navigation({logout, hidden, toggleHidden, auth}) {
    return(
        <nav>
            <div className="navigate-title">
                <button id="hamburger-icon" onClick={toggleHidden} aria-label="Skip to content"><FaAlignJustify style={{ width: "44px", height: "44px"}} /></button>
                <Link to="/"><h1>Find Ideal Worker</h1></Link>
            </div>
            <ul className={hidden ? 'hidden navigate-link' : 'navigate-link'}>
                {
                    auth ? 
                        <>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/your-order">Your Order</Link></li>
                            <li><button className="logout" onClick={logout} type="button">Logout</button></li>
                        </>
                        
                    :
                        <>
                            <li><Link to="/register">Daftar</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                        

                }
                
            </ul>
        </nav>
    )
}

export default Navigation