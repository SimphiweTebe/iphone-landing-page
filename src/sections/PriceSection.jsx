import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { PhoneScene3 } from '../assets/models/phone/Scene3'
import { ColorContext } from '../context/ColorContext'

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,255,255);
  padding-bottom: 30px;

  z-index: 1;
  overflow: hidden;

  .container {
    position: relative;
    width: 90%;
    height: 70%;
    max-width: 660px;
    margin: 0 auto;
  }

  ul {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 10%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const PhoneContainer = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  margin: 0 auto;
`
const ColorPill = styled.li`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid var(--dark);
  background-color: ${(props) => props.background};
  cursor: pointer;
`
const Price = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  line-height: 1.3;

  h3 {
    font-size: var(--textSizeSM);
    font-weight: 400;
  }

  h2 {
    font-size: var(--textSizeMD);
    font-weight: 400;
  }
`
const PriceAction = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 50px;
  margin-top: 20px;

  button {
    display: inline-block;
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    background: var(--blue);
    color: var(--white);
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    position: relative;
  }
`
const RotateIcon = styled.div`
  position: relative;
  width: 20%;
  margin: 0 auto;
  text-align: center;
  font-size: var(--textSizeSM);
  font-weight: 400;
`
function PriceSection() {

  const sectionRef = useRef(null)
  const { currentColor, changeColorTheme } = useContext(ColorContext)

  useEffect(()=> {
    sectionRef.current.style.backgroundColor = currentColor.color
  },[currentColor])

  const updateColor = (color, text, rgbColor) => {
    const colorObj = { color, text, rgbColor }
    changeColorTheme(colorObj)
  }

  return (
    <Section ref={sectionRef}>
      <div className="container">
        <RotateIcon>360&deg; &#x27F2;</RotateIcon>

        <PhoneContainer>
          <Canvas camera={{fov: 14}}>
            <ambientLight intensity={1}/>
            <directionalLight position={[-2,0,0]} intensity={1.2}/>
            <Suspense fallback={null}>
              <PhoneScene3 />
            </Suspense>
            <OrbitControls enableZoom={false} />
            <Environment preset="night" />
          </Canvas> 
        </PhoneContainer>

        <ul className='colours'>
          <ColorPill background='#9BB5CE' onClick={()=> updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")} />
          <ColorPill background='#F9E5C9' onClick={()=> updateColor("#F9E5C9", "Gold", "249, 229, 201")} />
          <ColorPill background='#505F4E' onClick={()=> updateColor("#505F4E", "Alpine Green", "80, 95, 78")} />
          <ColorPill background='#574f6f' onClick={()=> updateColor("#574f6f", "Deep Purple", "87, 79, 111")} />
          <ColorPill background='#A50011' onClick={()=> updateColor("#A50011", "Red", "165, 0, 17")} />
          <ColorPill background='#215E7C' onClick={()=> updateColor("#215E7C", "Blue", "33, 94, 124")} />
        </ul>

      </div>

      <Price>
        <h3>iPhone</h3>
        <h2>14 Pro Max</h2>
        <h3>From R18,000</h3>
      </Price>

      <PriceAction>
        <button>Buy</button>
        <a href="">Learn more</a>
      </PriceAction>

      <footer>Developed by Simpiwe 🚀</footer>

    </Section>
  )
}

export default PriceSection