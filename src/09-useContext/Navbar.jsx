import { NavLink } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"

const isActiveStyle = (navData) => navData.isActive ? "nav-link active" : "nav-link"

export const Navbar = () => {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div >
            <NavLink className="navbar-brand" to="/">useContext</NavLink>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-tabs nav-fill navbar navbar-dark bg-darl justifiy-content-center">
                <li  className="nav-item"><NavLink className={isActiveStyle} to="/">Home</NavLink></li>
                <li  className="nav-item"><NavLink className={isActiveStyle} to="/about">About</NavLink></li>
                <li  className="nav-item"><NavLink className={isActiveStyle} to="/login">Login</NavLink></li>
            </ul>    
        </div>
    </nav>
 
    

  )
}
