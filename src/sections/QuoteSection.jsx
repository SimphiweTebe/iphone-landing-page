import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'


const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--dark);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 90%;
  }
`

const animateUp = keyframes`
  100% {
    transform: translateY(0);
  }
`

const Text = styled.p`
  position: relative;
  overflow: hidden;
  font-size: var(--textSizeMD);
  height: 50px;
  color: var(--white);
  width: 100%;
  max-width: 700px;

  span {
    position: absolute;
    transform: translateY(6.5rem);
    animation-name: ${animateUp};
    animation-duration: 2.3s;
    animation-timing-function: ease;
    animation-delay: ${props => props.delay};
    animation-fill-mode: forwards;
    width: 100%;
    left: 0;
    font-weight: 300;
    text-align: left;

    // text clip effect
    background-image: linear-gradient(60deg, pink 5%, red 25%, blue 55%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author{
    text-align: right;
    font-weight: 500;
    font-size: 4rem;
  }
`

function QuoteSection() {
  gsap.registerPlugin(ScrollTrigger)
  const quotesRef = useRef(null)

  useLayoutEffect(()=>{
    let trigger = ScrollTrigger.create({
      trigger: quotesRef.current,
      start: 'top top',
      pin: true,
      pinSpacing: false
    })

    return ()=> trigger && trigger.kill()
  },[])

  return (
    <Section ref={quotesRef}>
      <div className="container">
        <Text delay="0s"><span>Be a yardstick of quality.</span></Text>
        <Text delay="0.4s"><span>Some people aren’t used to an environment</span></Text>
        <Text delay="0.8s"><span>where excellence is expected.</span></Text>
        <Text delay="1.2s"><span className='author'>- Steve Jobs</span></Text>
      </div>
    </Section>
  )
}

export default QuoteSection