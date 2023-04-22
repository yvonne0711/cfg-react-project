import { Outlet, Link } from "react-router-dom";
import './extra.css';
import logo_pic from './logo_pic.png';
{/*import bubblefy_logo_pic from "bubblefy_logo_pic.png";*/}


function Header() {
  // Import result is the URL of your image
  return <img src={logo_pic} alt="Bubblefy Logo" />;
}

const Layout = () => {
  return (
    <>
      <nav>

        <ul>
          <li>
            <Link to="/home">Home</Link>  {/* nav bar link to welcome page*/}
          </li>
          <li>
            <Link to="/about">About</Link>  {/* nav bar link to about page*/}
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>  {/* nav bar link to quiz page*/}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;