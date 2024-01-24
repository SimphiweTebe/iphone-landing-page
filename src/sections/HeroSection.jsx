import styled from "styled-components"
import inkVideo from '../assets/videos/ink.mp4'

const Hero = styled.section`
  width: 100%;
  margin: auto;
  height: 100vh;
  background-color: var(--dark);
  color: var(--white);
  position: relative;
  overflow: hidden;
  padding: 3rem;
`

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 3rem;
  font-size: var(--textSizeMD);
  font-weight: 300;
  color: var(--greyLight);
`

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  // text clip effect
  background-image: linear-gradient(60deg, blue 0%, red 55%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    font-size: var(--textSizeXLG);
    font-weight: 600;
  }

  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    span {
      width: 100%;
    }
  }
`
const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`

function HeroSection() {
  return (
    <Hero id="hero">
      <VideoContainer>
        <video src={inkVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <Title>iPhone 14 Pro Max</Title>
      <TextContainer>
        <span>So Cold.</span>
        <span>So Bold.</span>
      </TextContainer>
    </Hero>
  )
}

export default HeroSection