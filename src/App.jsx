import { ColorContextProvider } from './context/ColorContext'
import CameraSection from './sections/CameraSection'
import ColorSection from './sections/ColorSection'
import DesignSection from './sections/DesignSection'
import DisplaySection from './sections/DisplaySection'
import HeroSection from './sections/HeroSection'
import PhoneModel from './sections/PhoneModel'
import PriceSection from './sections/PriceSection'
import QuoteSection from './sections/QuoteSection'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {

  return (
    <>
      <GlobalStyle />
      <QuoteSection />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />

      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PriceSection />
      </ColorContextProvider>
    </>
  )
}

export default App
