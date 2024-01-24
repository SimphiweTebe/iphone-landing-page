import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 30px;

  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;

  h2 {
    font-size: var(--textSizeXLG);
    font-weight: 500;
  }

  & > *:nth-child(even) {
    align-self: flex-end;
    text-align: right;
  }
`

const TextBlock = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: ${props => props.isFlexEnd ? 'flex-end' : 'flex-start'};
  flex-direction: column;
  color: var(--greyLight);
  
  h3 {
    margin-bottom: 20px;
    font-size: var(--textSizeMD);
    font-weight: 500;
    color: var(--white);
  }
`

function DisplaySection() {

  return (
    <Section>
      <h2>Immersive Display</h2>
      <TextBlock isFlexEnd>
        <h3>Super Retina XDR display</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo dolorum magnam, quos illum ex cupiditate ab sit quod laudantium modi atque. Ab blanditiis quod maxime. Eum quas mollitia consequuntur!</p>
      </TextBlock>

      <TextBlock>
        <h3>Bigger is better</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo dolorum magnam, quos illum ex cupiditate ab sit quod laudantium modi atque. Ab blanditiis quod maxime. Eum quas mollitia consequuntur!</p>
      </TextBlock>
    </Section>
  )
}

export default DisplaySection