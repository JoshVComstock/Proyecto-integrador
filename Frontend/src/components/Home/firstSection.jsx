import React from 'react'
import styled from 'styled-components'
import TwoSection from './twoSection'
import ThreeSection from './threeSection'


const FirstSection = () => {
  return (
    <Container>
        <Portada></Portada>
       <Divtextoportada>
        <Tituloportada>Libertad financiera</Tituloportada>
        <Textoportada>la clave esta en encontrar un sistemas de trading que refleje tu personalidad y forma de vida.</Textoportada>
       </Divtextoportada>
      <TwoSection/>
      <ThreeSection/>
      
    </Container>
  )
}

export default FirstSection
const Container=styled.div`
    
`;
const Portada = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("./src/img/portada1.jpg");
  background-size: cover;
`;

const Tituloportada=styled.h1`
 font-size   :80px ;
`;
const Textoportada=styled.p`
    font-size:30px;
    text-align: left;
    width: 580px;
    padding-top: 20px;
`;
const Divtextoportada=styled.div`
    position: absolute;
    color: #fff;
    top: 280px;
    margin-left: 50px;
    
`;
