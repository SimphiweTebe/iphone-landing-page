import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import video1 from '../assets/videos/scuba_dive.mp4'
import video2 from '../assets/videos/Skate.mp4'
import { gsap } from 'gsap'

const Section = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`

const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`

const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: auto;
  z-index: 1;
`

const TextSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;

  position: absolute;
  top: 0;
  right: 0;
  line-height: 1;

  h3 {
    font-size: var(--textSizeXLG);
    font-weight: 400;
  }
`

function CameraSection() {

  const sectionRef = useRef(null)
  const videoOneRef = useRef(null)
  const videoTwoRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(()=> {

    let Elem = sectionRef.current
    let videoElem1 = videoOneRef.current
    let videoElem2 = videoTwoRef.current
    let textElem = textRef.current
    
    const ctx = gsap.context(()=> {
      // Pin section and set timeline
      let time = gsap.timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `+=100%`,
          scrub: true,
          pin: true
        }
      })
      .to(videoElem1, { scale: 0.5, y: 160 }, 'key1')
      .to(videoElem2, { scale: 0.8, y: 0 }, 'key1')

      // text animation
      gsap.utils.toArray('.text').forEach((item) => 
        time.fromTo(item, 
        { 
          scrollTrigger: {
            trigger: textElem,
            scrub: true,
            start: 'top top',
            end: `+=100%`,
          },
          opacity: 0, 
          x: -100 
        },
        { opacity: 1, x: 0 }
      ))
      
    }, sectionRef)

    return () => ctx.revert()

  },[])

  return (
    <Section ref={sectionRef}>
      <V1 ref={videoOneRef} src={video1} autoPlay muted loop />
      <V2 ref={videoTwoRef} src={video2} autoPlay muted loop />
      <TextSection ref={textRef}>
        <h3 className='text'>Ready.</h3>
        <h3 className='text'>Steady.</h3>
        <h3 className='text'>Action.</h3>
      </TextSection>
    </Section>
  )
}

export default CameraSection