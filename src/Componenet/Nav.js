
const Nav=()=>{
    return(
        <header>
            <nav className="nav">
              <img className="nav__logo" src='/images/logo.svg'/> 
             <img className="nav__hamburger" src='/images/bars-solid.svg'/>
             <img className="nav__close" src='/images/xmark-solid.svg'/>
             <ul className="nav__list showList  ">
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