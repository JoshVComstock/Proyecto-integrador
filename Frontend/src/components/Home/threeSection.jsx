import React from 'react'
import styled from 'styled-components'

const ThreeSection = () => {
  return (
    <Container>
        <Analisis>
      <Divcard className="card">
                
                 <figure>
                   <Img src="./src/img/analisis2.png" />
                 </figure>
                 <Divcontenido>
                  <H1>USD/EUR</H1>
                  <P>Zona de soporte</P>
                  <P>Tendencia bajista</P>
                  <P>Figura chartista</P>
                  <P>Tercer toque a la zona</P>
                  <A className="botondetalle"  href="">Leer Mas</A>
                 </Divcontenido>
      </Divcard>
      <Divcard className="card">
                
                 <figure>
                   <Img src="./src/img/analisis1.png" />
                 </figure>
                 <Divcontenido>
                  <H1>CAN/USD</H1>
                  <P>Zona de soporte trasadas</P>
                  <P>Tendencia alcista</P>
                  <P>Ema 200 a favor</P>
                  <P>Retrocesos y inpulsos</P>
                  <A className="botondetalle"  href="">Leer Mas</A>
                 </Divcontenido>
      </Divcard>
      <Divcard className="card">
                
                 <figure>
                   <Img src="./src/img/analisis3.png" />
                 </figure>
                 <Divcontenido>
                  <H1>USD/CHEF</H1>
                  <P>Techos trasados</P>
                  <P>Pisos trasados</P>
                  <P>Noticias estables</P>
                  <P>Tendencia bajista </P>
                  <A className="botondetalle"  href="">Leer Mas</A>
                 </Divcontenido>
      </Divcard>
      <Divcard className="card">
                
                 <figure>
                   <Img src="./src/img/analisis4.png" />
                 </figure>
                 <Divcontenido>
                  <H1>USD/CHEF</H1>
                  <P>Techos trasados</P>
                  <P>Pisos trasados</P>
                  <P>Noticias estables</P>
                  <P>Tendencia bajista </P>
                  <A className="botondetalle"  href="">Leer Mas</A>
                 </Divcontenido>
      </Divcard>
      <Divcard className="card">
                
                 <figure>
                   <Img src="./src/img/analisis5.png" />
                 </figure>
                 <Divcontenido>
                  <H1>USD/CHEF</H1>
                  <P>Techos trasados</P>
                  <P>Pisos trasados</P>
                  <P>Noticias estables</P>
                  <P>Tendencia bajista </P>
                  <A className="botondetalle"  href="">Leer Mas</A>
                 </Divcontenido>
      </Divcard>
      <Divcard className="card">
                
                 <figure>
                   <Img src="./src/img/analisis 6.png" />
                 </figure>
                 <Divcontenido>
                  <H1>USD/CHEF</H1>
                  <P>Techos trasados</P>
                  <P>Pisos trasados</P>
                  <P>Noticias estables</P>
                  <P>Tendencia bajista </P>
                  <A className="botondetalle"  href="">Leer Mas</A>
                 </Divcontenido>
      </Divcard>
      
      </Analisis>
    </Container>
  )
}
export default ThreeSection
const Container=styled.div`
  width  :100%;
  height: 100%;
`;
const Analisis=styled.div`
background    :#fff ;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;
const Divcard = styled.div`
  width: 350px;
  margin: 20px;
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  cursor: default;
  transition: all 400ms ease;
`;
const Img = styled.img`
  
  width: 100%;
  height: 210px;
`;
const Divcontenido = styled.div`
  padding: 15px;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: 400;
  margin-bottom: 15px;
  color: #000;
`;
const P = styled.p`
  line-height: 1.5;
  color: #6a6a6a;
`;
const A = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  color: #000;
  box-shadow: -3px -3px 7px #ffffff,3px 3px 5px #6e6e6f;
  border-radius: 4px;
  transition: all 400ms ease;
`;