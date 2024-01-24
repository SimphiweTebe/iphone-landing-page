import gsap from "gsap"
import { useLayoutEffect } from "react"
import { useRef } from "react"
import styled from "styled-components"

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`
const TextContainer = styled.p`
  width: 100%;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.flexEnd ? 'flex-end' : 'flex-start'};
  color: var(--dark);
  padding: 0 30px;
  font-weight: 500;

  span {
    font-size: var(--textSizeLG);
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: var(--textSizeMD);
    }
  }
`

function DesignSection() {

  const containerRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  useLayoutEffect(()=>{
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top-=500 top',
        end: 'bottom top',
        scrub: true
      }
    })
    .fromTo(text1Ref.current, {x: 0}, {x: '30%'}, 'key1')
    .fromTo(text2Ref.current, {x: 0}, {x: '-30%'}, 'key1')

    return ()=> timeline && timeline.kill()
  },[])

  return (
    <Section ref={containerRef} >
      <TextContainer ref={text1Ref}><span>Flawless design with strong durablity.</span></TextContainer>
      <TextContainer flexEnd ref={text2Ref}><span>Flat-edge design with toughest smartphone glass.</span></TextContainer>
    </Section>
  )
}

export default DesignSection