import { Outlet, Link } from "react-router-dom";
import './extra.css';
{/*import bubblefy_logo_pic from "bubblefy_logo_pic.png";*/}



const Layout = () => {
  return (
    <>
      <nav>
        {/*<div>
          <img className="logo" src={bubblefy_logo_pic}/>
  </div> */}
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