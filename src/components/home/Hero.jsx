import styled from "styled-components";

const Hero = () => {
  return (
    <HeroStyled className="hero">
      <Container>
        <h1>Amatuer Astronomy Club</h1>
        <p>Explore the Cosmos</p>
      </Container>
    </HeroStyled>
  );
};
const HeroStyled = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 64px;

  color: white;
`;
const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-left: 2px solid grey;
  h1 {
    font-family: "Righteous", cursive;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 48px;
    margin: 8px 0px;
  }
  p {
    font-size: 24px;
    font-family: "Josefin Sans", sans-serif;
  }
  button {
    display: inline-block;
    padding: 16px 36px;
    width: fit-content;
    font-size: 18px;
    border: none;
    background-color: #2175ff;
    color: white;
  }
`;

export default Hero;
