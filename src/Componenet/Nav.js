
const Nav=()=>{
    return(
        <header>
            <nav className="nav">
             <img className="nav__logo" src='/images/logo.svg'/>
             <img className="nav__hamburger" src='/images/bars-solid.svg'/>
             <img className="nav__close" src='/images/xmark-solid.svg'/>
             <ul className="nav__list hidden">
                <li className="nav__list-link">Features</li>
                <li className="nav__list-link">Pricing</li>
                <li className="nav__list-link">Resources</li>
             </ul>
             <div className="nav__btn-box hidden">
                <button className="nav__btn-login">Login</button>
                <button className="nav__btn-signUp btn btn--rounded">Sign up</button>
             </div>
            </nav>
        </header>
    )
}


export default Nav;