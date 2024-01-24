import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import styled from "styled-components"
import { PhoneScene } from "../assets/models/phone/Scene"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`

function PhoneModel() {
  return (
    <Container id="phone">
        <Canvas camera={{fov: 14}}>
          <ambientLight intensity={1.7}/>
          <directionalLight position={[-2,0,0]} intensity={1.2}/>
          <Suspense fallback={null}>
            <PhoneScene />
          </Suspense>
          {/* <OrbitControls /> */}
          <Environment preset="night" />
        </Canvas> 
    </Container>
  )
}

export default PhoneModel