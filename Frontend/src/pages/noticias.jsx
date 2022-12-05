import React from "react";
import styled from "styled-components";

const Noticias = () => {
  return (
    <Container>
      <Titulo>
        <H1>Noticias</H1>
      </Titulo>
      <Cardall>
        <Divcard>
          <figure>
            <Img src="https://i-invdn-com.investing.com/trkd-images/LYNXMPEIB308M_L.jpg" />
          </figure>
          <Divcontenido>
            <H1card>
              La italiana Meloni podría suavizar su plan sobre pagos en efectivo
              tras conversaciones con la UE
            </H1card>
            <P>
              ROMA, 4 dic (Reuters) - La primera ministra italiana, Giorgia
              Meloni, dijo el domingo que podría suavizar sus planes para
              facilitar el pago de pequeñas cantidades en efectivo en lugar de
              con tarjeta, tras las conversaciones mantenidas con la Comisión
              Europea sobre el tema. El gobierno de Meloni ha presentado un
              presupuesto para 2023 que elimina las multas a los comercios que
              rechacen recibir pagos con tarjetas para montos inferiores a 60
              euros (63,23 dólares), en una medida que se considera contraria al
              espíritu de los compromisos adquiridos con la UE.
            </P>

            <A href="https://es.investing.com/news/economy/la-italiana-meloni-podria-suavizar-su-plan-sobre-pagos-en-efectivo-tras-conversaciones-con-la-ue-2329940">Leer Mas</A>
          </Divcontenido>
        </Divcard>
        <Divcard>
          <figure>
            <Img src="https://i-invdn-com.investing.com/trkd-images/LYNXMPEIB307D_L.jpg" />
          </figure>
          <Divcontenido>
            <H1card>Villeroy del BCE se muestra partidario de una subida de tasas de 50 pb el 15 de diciembre</H1card>
            <P>PARÍS, 4 dic (Reuters) - El Banco Central Europeo debería subir las tasas de interés en 50 puntos básicos (pb) el 15 de diciembre, dijo el domingo el jefe del banco central francés, François Villeroy de Galhau, reforzando las expectativas de que el BCE reduzca el ritmo de endurecimiento monetario.</P>
            <A href="https://es.investing.com/news/economic-indicators/villeroy-del-bce-se-muestra-partidario-de-una-subida-de-tasas-de-50-pb-el-15-de-diciembre-2329928">Leer Mas</A>
          </Divcontenido>
        </Divcard>
        <Divcard>
          <figure>
            <Img src="https://i-invdn-com.investing.com/trkd-images/LYNXMPEIB309G_L.jpg" />
          </figure>
          <Divcontenido>
            <H1card>Asesor presidencial de Ucrania advierte contra las "soluciones mágicas y sencillas" de Musk</H1card>
            <P>KIEV, 4 dic (Reuters) - Un funcionario de alto rango de la presidencia ucraniana criticó el domingo al propietario de Twitter (NYSE:TWTR), Elon Musk, por sus "soluciones mágicas y sencillas", citando las ideas propuestas por el multimillonario sobre la invasión de Rusia a Ucrania y la moderación de contenidos en Twitter.</P>
           
            <A href="">Leer Mas</A>
          </Divcontenido>
        </Divcard>
       
      </Cardall>
    </Container>
  );
};

export default Noticias;
const Container = styled.div`
  width: 100%;
  height: 200vh;
  background: #000;
`;
const Divcard = styled.div`
  width: 350px;
  margin: 20px;
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
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
  font-size: 40px;
  margin-left: 20px;
  color: #ffffff;
  padding-top: 20px;
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
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #6e6e6f;
  border-radius: 4px;
  transition: all 400ms ease;
`;
const Titulo = styled.header`
  height: 100px;
`;
const Cardall = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const H1card=styled.h1`
    
`;
