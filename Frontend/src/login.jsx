import React from "react";
import styled from "styled-components";
import './all.css';

const Divbody=styled.div`
  display  :flex ;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

`;
const Divbox=styled.div`
 
`;
const Divboxform=styled.div`
`;
const Login=()=>{
return(
    <Divbody className="body">
        <Divbox className="box">
            <Divboxform className="box-form">
                 <h1>BIENVENIDO</h1>
                 <div>
                    <input type="text" />
                    <input type="password" />
                 </div>
                 <button>Enviar</button>
                 <a href="">Crear cuenta</a>
            </Divboxform>
        </Divbox>

    </Divbody>
)
}
export default Login;
