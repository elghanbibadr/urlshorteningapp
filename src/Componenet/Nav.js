import { useState } from "react";
const Nav=()=>{
    const [isListVisible,setListIsVisible]=useState(false);
    const handleIconClick=()=>setListIsVisible(!isListVisible);

    return(
        <header>
            <nav className="nav">
              <img className="nav__logo" src='/images/logo.svg'/> 
             <img onClick={handleIconClick} className={`nav__hamburger ${isListVisible ?'hidden' :''}`} src='/images/bars-solid.svg'/>
             <img onClick={handleIconClick}  className={`nav__close ${!isListVisible ?'hidden' :''}`} src='/images/xmark-solid.svg'/>
             <ul className={`nav__list nav_list-collapsible ${!isListVisible ? 'hidden':''}`}>
                <li className="nav__list-link">Features</li>
                <li className="nav__list-link">Pricing</li>
                <li className="nav__list-link">Resources</li>
                <li className="nav__list-link nav__list-link-login ">Login</li>
                <li className="nav__list-link"><button class="btn btn--rounded">Sign up</button></li>
             </ul>
            </nav>
        </header>
    )
}


export default Nav;