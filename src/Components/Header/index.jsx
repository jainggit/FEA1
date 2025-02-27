
import { Outlet } from "react-router"
import Logo from "../../images/icon/Logo.png"
import "./Header.module.css"

const Header = () => {
    return (
        <>
            <nav>
                <img src={Logo}  />
            </nav>
            
        <Outlet />
        </>
        
    )
}

export default Header