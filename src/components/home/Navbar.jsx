
import { Link } from "react-router-dom";
import './Navbar.css'
import { useRef } from "react";

const Navbar = () => {

  const navRef=useRef()

  const toggleNav=()=>{
    navRef.current.classList.toggle('active')
  }

  return (
    <nav className='navbar'>
      <div className='aac-title'>AAC NITK</div>
      <a href="#" onClick={toggleNav} className="toggle-nav">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div class='navbar-links active' ref={navRef}>
        <div class='link-list'>
          <Link to="/" >
            Home
          </Link>
          <Link to="/events" >
            Events
          </Link>
          <Link to="/gallery" >
            Gallery
          </Link>
          <Link to="/team" >
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
};
// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   padding: 24px 64px;
//   justify-content: space-between;
//   font-family: "Josefin Sans", sans-serif;
//   font-size: 22px;
//   background-color: rgb(17, 33, 63);
//   position: sticky;
// `;
// const Logo = styled.div`
//   font-family: "Righteous", cursive;
//   text-transform: uppercase;
//   letter-spacing: 4px;
//   color: white;
// `;
// const Links = styled.div`
//   display: flex;
//   gap: 32px;
//   a {
//     text-decoration: none;
//     font-weight: 500;
//     color: white;
//   }
// `;

export default Navbar;
