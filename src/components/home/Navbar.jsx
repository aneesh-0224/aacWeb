import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Logo>AAC NITK</Logo>
      <Links className="topnav" id="myTopnav">
        <Link  to="/" className="active">
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
      </Links>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 64px;
  justify-content: space-between;
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  background-color: rgb(17, 33, 63);
  position: sticky;
`;
const Logo = styled.div`
  font-family: "Righteous", cursive;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: white;
`;
const Links = styled.div`
  display: flex;
  gap: 32px;
  a {
    text-decoration: none;
    font-weight: 500;
    color: white;
  }
`;

export default Navbar;
