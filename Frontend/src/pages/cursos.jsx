import React from 'react'
import styled from 'styled-components'

const Cursos = () => {
  return (
    <Container>
      <Headertitulo>
        <H1>Cursos</H1>
      </Headertitulo>
      <Divsecciones>
        <Section1>
          <H1tema>Temas</H1tema>
          <nav>
            <ul>
              <Lia><a href='#'></a>Opciones Binarias</Lia>
              <Lia><a href="#"></a>Indices sinteticos</Lia>
            </ul>
          </nav>
        </Section1>
        <section>
          <Divcardtotal>
            <H1tema>Teoria</H1tema>
          <Divcard>
            <Divtitulocard>
              <Imglogo src="" alt="" />
              <h1>Opciones Binarias</h1>
            </Divtitulocard> 
            <Divlinks>
              <ul>
                <Licard><Acard href="#" >Creacion de vela</Acard></Licard>
                <Licard><Acard href="#" >Velas</Acard></Licard>
                <Licard><Acard href="#" >Operadores relacionales</Acard></Licard>
                <Licard><Acard href="#" >Operadores logicos</Acard></Licard>
                <Licard><Acard href="#" >Razonamiento logico</Acard></Licard>
              </ul>
              <div>
                <Botonprueba>Evaluacion</Botonprueba>
              </div>
            </Divlinks>           
          </Divcard>
          
          </Divcardtotal>
        </section>
      </Divsecciones>
    </Container>
  )
}

export default Cursos
const Container=styled.div`
    background: #000;
    height: 100vh;
`;

const Headertitulo=styled.header`
  height: 100px;

`;
const H1=styled.h1`
  font-size: 40px;
  margin-left: 20px;
  color: #ffffff;
  padding-top: 20px;
`;
const Divsecciones=styled.section`
 display: flex;
`;
const Section1=styled.section`
 width: 30%;
 margin-left: 30px;
 border-right: 1px solid rgba(0,0,0,.2);
 height: 380px;

`;
const H1tema=styled.h1`
  font-size: 30px;
  padding: 10px;
  color: #fff;
  border-bottom: 2px solid #fff;
  border-radius: 10px;
`;
const Lia=styled.li`
  color: #fff;
  margin-top: 15px;
  list-style: none;
  padding: 20px 10px;
  border-radius:40px;
  transition: .4s;
 
  cursor: pointer;
  &:hover{  
    padding-left: 20px;
    border-left: 7px solid #48cae4;
    border-right: 7px solid #48cae4;
    transition: .4s;
  }
`;
const Divcard=styled.div`
width: 700px;
height:300px;
border: 1px solid rgba(0,0,0,.3);
border-radius: 8px;
margin:20px 20px;
`;
const Imglogo=styled.img`
width:50px;
height:50px;
`;
const Divtitulocard=styled.div`
  display: flex;
  align-items: center;
  padding:5px;
  border-bottom: 1px solid rgba(0,0,0,.2);
  margin: 5px;
 
`;
const Licard=styled.li`
 list-style: none;
 margin:20px 20px;
 transition: .4s;
 
 

 &:hover{
  padding-left:15px ;
  transition: .4s;
  text-decoration: underline;
  
 }
`;
const Acard=styled.a`
 text-decoration: none;
 color: #000;
 
`;
const Divcardtotal=styled.div`
height: 600px;
overflow-y:auto;
width: 770px;
padding: 5px;
`;
const Divlinks=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px;
`;
const Botonprueba=styled.button`
  padding: 6px;
  border-radius: 10px ;
  cursor: pointer;
  border: none;
 color: #03045e;
  
  font-size: 20px;
`;