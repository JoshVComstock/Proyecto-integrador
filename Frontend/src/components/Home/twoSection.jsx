import React from "react";
import styled from "styled-components"

const TwoSection = () => {
  return (
    <Container>
      <Portada2>
        <Tituloportada2>Especialidades</Tituloportada2>
        <Cards>
          <Card>
            <Cardiv>
              <div>
                <Imgespecialidades
                  src="./src/img/especialidadfoto1.jpg"
                  alt=""/>
              </div>
              <Cardtext>
                <H1tituloespecialidad>Indices sinteticos</H1tituloespecialidad>
                <p>
                  La bolsa de valores tiene diferentes mercados y te
                  especializas en indices sinteticos
                </p>
                <Abotonespecialidad href="#">Entrar</Abotonespecialidad>
              </Cardtext>
            </Cardiv>
          </Card>
          <Card>
            <Cardiv>
              <div>
                <Imgespecialidades
                  src="./src/img/especialidadfoto1.jpg"
                  alt=""/>
              </div>
              <Cardtext>
                <H1tituloespecialidad>Indices sinteticos</H1tituloespecialidad>
                <p>
                  La bolsa de valores tiene diferentes mercados y te
                  especializas en indices sinteticos
                </p>
                <Abotonespecialidad href="#">Entrar</Abotonespecialidad>
              </Cardtext>
            </Cardiv>
          </Card>
          
        </Cards>
      </Portada2>
    </Container>
  );
};

export default TwoSection;
const Container = styled.div`
  width: 100%;
  max-height: 70%;
`;
const Tituloportada2 = styled.h1`
  font-size: 50px;
  text-align: center;
  margin: 30px;
  
`;
const Cards = styled.div`
  width: 100%;
  background: #4b6cb7;
  background: linear-gradient(to right, #182848, #4b95b7);
  background: linear-gradient(to right, #182848, #4b95b7);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Card = styled.div`
  min-width: 700px;
  min-height: 600px;
  margin: 10px;
  padding: 10px;
`;
const Imgespecialidades = styled.img`
  max-width: 200px;
  min-height: 250px;
  border-radius: 7px;
  object-fit: cover;
`;

const H1tituloespecialidad = styled.h1`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const Abotonespecialidad = styled.a`
  text-decoration: none;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: #fff;
  background: #000;
  border-radius: 15px;
  margin-top: 15px;
`;
const Portada2 = styled.section`
  background: #fff;
  width: 100%;
  height: 100vh;
`;
const Cardiv = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  background: #fff;
`;
const Cardtext = styled.div``;
