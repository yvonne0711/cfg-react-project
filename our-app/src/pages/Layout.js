import { Outlet, NavLink } from "react-router-dom";
import "./QuizExtra.css";
import logo_pic from "./logo_pic.png";


const Layout = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
     
        <NavLink exact to="/home" className="navbar-logo">Bubblefy
        <img src={logo_pic} className="logo" alt="Logo" />
        </NavLink>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink exact to="/home" className="navbar-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/quiz" className="navbar-link" activeClassName="active">
              Quiz
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  );
};

export default Layout;
