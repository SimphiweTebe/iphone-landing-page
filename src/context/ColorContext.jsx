import { useGLTF } from "@react-three/drei";
import { createContext, useState } from "react";

export const ColorContext = createContext({})

export const ColorContextProvider = ({children}) => {

  const { materials } = useGLTF('./models/phone/scene.gltf')

  const [currentColor, setCurrentColor] = useState({
    color: '"#9BB5CE"',
    text: 'Sierra Blue',
    rgbColor: "155, 181, 206"
  })

  const changeColorTheme = (colorObj) => {
    materials.Body.color.set(colorObj.color)
    setCurrentColor(colorObj)
  }

  return (
    <ColorContext.Provider value={{currentColor, changeColorTheme}}>
      {children}
    </ColorContext.Provider>
  )
}