import React, { useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'

export function PhoneScene(props) {
  const { nodes, materials } = useGLTF('./models/phone/scene.gltf')
  const camera = useThree(state => state.camera)
  const scene = useThree(state => state.scene)

  useLayoutEffect(()=>{
    camera.position.set(0,2,6)
    materials.Body.color.set('#9BB5CE')

    //responsive
    let fov = (1400 * 18) / window.innerWidth
    camera.fov = fov
    camera.updateProjectionMatrix()

    const matchMedia = gsap.matchMedia()

    matchMedia.add({ isDesktop: `(min-width: 48em)`, isMobile: `(max-width: 48em)`,
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#phone',
          start: 'top+=200 top',
          end: 'top top',
          endTrigger: '#colors',
          scrub: true,
          // markers: true
        }
      })

      timeline.fromTo(camera.position, {y: 3}, {y: 0})
      .to(scene.rotation, {y: 0.8})
      .to(scene.rotation, {y: 3})
      .to(scene.rotation, {z: 1.58}, "key1")
      .to(camera.position, {z: 4}, "key1")
      .to(scene.rotation, {y: 0, z:0 }, "key2")
      .to(camera.position, {z: 6, x: isDesktop ? -1 : 0}, "key2")
      .to(scene.rotation, {y: 6.3, z:0 }, "key3")
      .to(camera.position, {x: isDesktop ? 0.8 : 0, y: 0}, "key3")

      if(isMobile) {
        camera.fov = 20
        camera.updateProjectionMatrix()
      }

      return ()=> timeline.kill()

      })

  },[])

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={100}>
          <mesh geometry={nodes.Frame_Frame_0.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Frame_Frame2_0.geometry} material={materials.Frame2} />
          <mesh geometry={nodes.Frame_Port_0.geometry} material={materials.Port} />
          <mesh geometry={nodes.Frame_Antenna_0.geometry} material={materials.Antenna} />
          <mesh geometry={nodes.Frame_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_Bezel_0.geometry} material={materials.Bezel} />
          <mesh geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Body_Wallpaper_0.geometry} material={materials.Wallpaper} />
          <mesh geometry={nodes.Body_Camera_Glass_0.geometry} material={materials.Camera_Glass} />
          <mesh geometry={nodes.Body_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Body_Material_0.geometry} material={materials.Material} />
          <mesh geometry={nodes.Camera_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Camera_Glass_0.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Camera_Camera_Frame001_0.geometry} material={materials['Camera_Frame.001']} />
          <mesh geometry={nodes.Camera_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body001_Screen_Glass_0.geometry} material={materials.Screen_Glass} />
          <mesh geometry={nodes.Button_Frame_0.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Circle003_Frame_0.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
          <mesh geometry={nodes.Camera001_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Camera001_Gray_Glass_0.geometry} material={materials.Gray_Glass} />
          <mesh geometry={nodes.Camera001_Flash_0.geometry} material={materials.Flash} />
          <mesh geometry={nodes.Camera001_Port_0.geometry} material={materials.Port} />
          <mesh geometry={nodes.Camera001_Camera_Frame_0.geometry} material={materials.Camera_Frame} />
          <mesh geometry={nodes.Camera001_Camera_Glass_0.geometry} material={materials.Camera_Glass} />
          <mesh geometry={nodes.Camera001_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Camera001_Black_Glass_0.geometry} material={materials.Black_Glass} />
          <mesh geometry={nodes.Camera003_Material002_0.geometry} material={materials['Material.002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/phone/scene.gltf')
