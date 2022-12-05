import React from "react";
import styled from "styled-components";
import { useState } from "react";
import appFirebase from "../credenciales";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from 'firebase/auth';
const auth = getAuth(appFirebase);
import { useContext } from "react";
import { useUserContext } from "../context/usercontext";

const Login = () => {
  const [registro, setRegistro] = useState(false);
  const handlerSubmit = async(e)=>{
    //esto es una funcion
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (registro) {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
    } else {
      await signInWithEmailAndPassword(auth, email, password)
    }
  }

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const {setUser}=useUserContext();
  return (
    <Container>
      {registro ? (
        <>
          <Caja1>
            <H1>Registrate</H1>
            <Form >
              <Divform>
                <Cajainput>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    required
                    id="nombre"
                  />
                </Cajainput>
                <Cajainput>
                  <Input
                    type="text"
                    placeholder="Apellido"
                    required
                    id="apellido"
                  />
                </Cajainput>
                <Cajainput>
                  <Input
                    type="number"
                    placeholder="Celular"
                    required
                    id="numero"
                  />
                </Cajainput>

                <Cajainput>
                  <Select name="rol">
                    <Option value="1" onClick={() => setRol(1)}>
                      Estudiante
                    </Option>
                    <Option value="2" onClick={() => setRol(2)}>
                      Educador
                    </Option>
                  </Select>
                </Cajainput>
              </Divform>
              <Divform>
                <Cajainput>
                  <Icons>
                    <ion-icon name="person-circle"></ion-icon>
                  </Icons>
                  <Input type="email" placeholder="Email" id='email' required />
                </Cajainput>
                <Cajainput>
                  <Icons>
                    <ion-icon name="lock-closed"></ion-icon>
                  </Icons>
                  <Input
                    type="password"
                    placeholder="Password"
                    id='password'
                    required
                    
                  />
                </Cajainput>
                <Linkregistro>
                  <P>
                    Ya tiene cuenta
                    <A onClick={() => setRegistro(!registro)}> Inicia sesion</A>
                  </P>
                </Linkregistro>
                <Boton type="submit">Registrar</Boton>
              </Divform>
            </Form>
          </Caja1>
        </>
      ) : (
        <>
          <Caja>
            <form>
              <H1>Login</H1>

              <Cajainput>
                <Icons>
                  <ion-icon name="person-circle"></ion-icon>
                </Icons>
                <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
              </Cajainput>
              <Cajainput>
                <Icons>
                  <ion-icon name="lock-closed"></ion-icon>
                </Icons>
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
              </Cajainput>
              <Linkregistro>
                <P>
                  No tienes cuenta
                  <A onClick={() => setRegistro(!registro)}> Registrate</A>
                </P>
              </Linkregistro>
              <Boton type="submit" onClick={()=>setUser({email,password})}>Entrar</Boton>
            </form>
          </Caja>
        </>
      )}
    </Container>
  );
};

export default Login;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  transition: 0.5s;
`;
const Caja = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  background: transparent;
  border: 5px solid #333;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    border: 5px solid #0d00a4;
    box-shadow: 0 0 20px #0d00a4, inset 0 0 20px #0d00a4;
    &:hover H1 {
      transition: 0.5s;
      color: #0d00a4;
    }
    &:hover Input {
      transition: 0.5s;
      border: 2px solid #0d00a4;
      box-shadow: 0 0 10px #0d00a4, inset 0 0 10px #0d00a4;
    }
    &:hover span {
      transition: 0.5s;
      color: #0d00a4;
    }
    &:hover button {
      transition: 0.5s;
      background: #0d00a4;
      color: #000;
      box-shadow: 0 0 20px #0d00a4;
    }
    &:hover a {
      transition: 0.5s;
      color: #0d00a4;
    }
    &:hover select {
      transition: 0.5s;
      border: 2px solid #0d00a4;
      box-shadow: 0 0 10px #0d00a4, inset 0 0 10px #0d00a4;
    }
  }
`;
const Form = styled.form`
  display: flex;
`;
const Caja1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 500px;
  background: transparent;
  border: 5px solid #333;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    border: 5px solid #0d00a4;
    box-shadow: 0 0 20px #0d00a4, inset 0 0 20px #0d00a4;
    &:hover H1 {
      transition: 0.5s;
      color: #0d00a4;
    }
    &:hover Input {
      transition: 0.5s;
      border: 2px solid #0d00a4;
      box-shadow: 0 0 10px #0d00a4, inset 0 0 10px #0d00a4;
    }
    &:hover span {
      transition: 0.5s;
      color: #0d00a4;
    }
    &:hover button {
      transition: 0.5s;
      background: #0d00a4;
      color: #000;
      box-shadow: 0 0 20px #0d00a4;
    }
    &:hover a {
      transition: 0.5s;
      color: #0d00a4;
    }
    &:hover select {
      transition: 0.5s;
      border: 2px solid #0d00a4;
      box-shadow: 0 0 10px #0d00a4, inset 0 0 10px #0d00a4;
    }
  }
`;

const H1 = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #fff;
  &:hover {
    color: #0d00a4;
  }
`;
const Cajainput = styled.div`
  position: relative;
  width: 320px;
  margin: 30px 0;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #333;
  outline: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 0 10px 0 35px;
  color: #fff;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;
const Icons = styled.span`
  position: absolute;
  left: 10px;
  color: #fff;
  font-size: 1.2em;
  line-height: 55px;
`;
const Boton = styled.button`
  position: relative;
  width: 100%;
  height: 45px;
  background: #333;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  color: #fff;
  font-weight: 100;
`;
const Linkregistro = styled.div`
  font-size: 0.9em;
  text-align: center;
  margin: 25px 0;
`;
const P = styled.p`
  color: #fff;
`;
const A = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
const Select = styled.select`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #333;
  outline: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 0 10px 0 35px;
  color: #fff;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;
const Option = styled.option`
  color: #000;
`;
const Divform = styled.div`
  margin: 15px;
`;
