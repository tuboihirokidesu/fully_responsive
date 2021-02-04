import styled from "styled-components";
import Button from "./Button";

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: url("images/img-home.jpg") center center/cover no-repeat; */
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;
const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
`;

const HeroHeader = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: 100px;

  @media screen and (max-width: 960px) {
    font-size: 70px;
    margin-top: 150px;
  }
`;
const HeroParagraph = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
const HeroBtnWrap = styled.div`
  margin-top: 32px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Video src='videos/video-2.mp4' autoPlay loop muted />
      <HeroHeader>ADVENTURE AWAITS</HeroHeader>
      <HeroParagraph>What are you waiting for?</HeroParagraph>
      <HeroBtnWrap>
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log("hey")}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>{" "}
      </HeroBtnWrap>
    </HeroContainer>
  );
};

export default HeroSection;
