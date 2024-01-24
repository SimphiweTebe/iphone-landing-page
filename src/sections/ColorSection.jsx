import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { Suspense, useLayoutEffect, useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { PhoneScene2 } from "../assets/models/phone/Scene2"
import { ColorContext } from '../context/ColorContext'

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SectionPanel = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;

  background-color: lighten(${props => props.color}, .6);
`

const CenterPanel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  font-size: var(--textSizeXLG);
  text-transform: uppercase;
  font-weight: 400;
  filter: brightness(0.85);

  @media screen and (max-width: 500px) {
    top: 40px;
    transform: translate(-50%, 0) rotate(0deg);
    left: 50%;
    font-size: var(--textSizeLG);
  }
`

function ColorSection() {

  const sectionRef = useRef(null)
  const leftPanelRef = useRef(null)
  const rightPanelRef = useRef(null)
  const textRef = useRef(null)

  const { currentColor, changeColorTheme } = useContext(ColorContext)

  useEffect(()=> {
      textRef.current.innerText = currentColor.text
      textRef.current.style.color = currentColor.color
      rightPanelRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`
      leftPanelRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`
  }, [currentColor])

  useLayoutEffect(()=> {
    
    const ctx = gsap.context(()=>{

      let Elem = sectionRef.current
      
      const updateColor = (color, text, rgbColor) => {
        const colorObj = { color, text, rgbColor }
        changeColorTheme(colorObj)
      }
  
      gsap.timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `+=100%`,
          scrub: true,
          pin: true
        }
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

      }, sectionRef)

      return () => ctx.revert()

  },[])

  return (
    <Section ref={sectionRef} id="colors">
      <SectionPanel color={`rgba(155, 181, 206, 0.8)`} ref={leftPanelRef}/>
      <CenterPanel ref={textRef}></CenterPanel>
      <SectionPanel color={`rgba(155, 181, 206, 0.4)`} ref={rightPanelRef}>
        <Canvas camera={{fov: 6.5}}>
            <ambientLight intensity={1.7}/>
            <directionalLight position={[-2,0,0]} intensity={1.2}/>
            <Suspense fallback={null}>
              <PhoneScene2 />
            </Suspense>
            <Environment preset="night" />
        </Canvas> 
      </SectionPanel>
    </Section>
  )
}

export default ColorSection