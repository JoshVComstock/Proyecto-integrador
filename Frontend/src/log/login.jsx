import React from "react";
import styled from "styled-components";
import './all.css';

const Divbody=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

`;
const Divbox=styled.div`
`;
const Divboxform=styled.div`

`;
const Divinput=styled.div`
width: 100%;

`;
const H1titulo=styled.h1`
text-align: center;

margin-top: -50px;
width: 100%;
background: #000;
color: #fff;
border-radius: 5px;


`;
const Login=()=>{
return(
<div>
    
       <div className="login-box">
         <img src="" className="avatar" alt="Avatar Image"/>
         <h1>Login </h1>
         <form action="">
           
           <label for="username">Usuario</label>
           <input type="text" />
           
           <label for="password">Password</label>
           <input type="password"/>
           <input type="submit" value="Entrar"/>
           
         </form>
       </div>
</div>
  
)
}
export default Login;
