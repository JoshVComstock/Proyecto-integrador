import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import appFirebase from '../../credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Hometeacher from '../../pages/Hometeacher'
import { useState } from 'react'
import Login from '../../pages/Login'
import { useUserContext } from '../../context/usercontext'
const auth=getAuth(appFirebase)


const Navbar = () => {

  const [usuario,setUsuario]=useState(null)
  const {user}=useUserContext();
  const [estudiante,setEstudiante]=useState(false);
  const [docente,setDocente]=useState(false);  
  onAuthStateChanged(auth, (usuarioFirebase) => {
  if(usuarioFirebase)
  {
    setUsuario(usuarioFirebase)

  }else
  {
    setUsuario(null);

  }
})
  return (
    <div>
      <Headerlogo>
        <Logotex >Trading grade</Logotex>
        <Navar>
          {docente ?(<>
            <Ullink>
            <Lilink>
              <Alink to="/">Inicio</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/curso">Cursos</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/user">Alumnos</Alink>
            </Lilink>
            <Diventrarlogin>
              <Lilink>
                <Alink to="/logout">Logout</Alink>
              </Lilink>
            </Diventrarlogin>
          </Ullink>
          
          </>):(<>
          <Ullink>
            <Lilink>
              <Alink to="/">Inicio</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/curso">Cursos</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/noticias">Noticias</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/chat">Chat</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/hometeacher" onClick={() => setDocente(!docente)}>docente</Alink>
            </Lilink>
            <Lilink>
              <Alink to="/estudiante" >estudiante</Alink>
            </Lilink>
            <Diventrarlogin>
              <Lilink>
                <Alink to="/login">Login</Alink>
              </Lilink>
              <Lilink>
                <Alink to="/registrar">Registrar</Alink>
              </Lilink>
            </Diventrarlogin>
          </Ullink>
          </>)}
          
        </Navar>        
      </Headerlogo>
      <Outlet/>
    </div>
  )
}
export default Navbar

const Navar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Headerlogo = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  transition: 0.7s;
  padding: 30px 20px;
  z-index: 10;
  background: #000;
  height: 70px;
`;
const Ullink = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Lilink = styled.li`
  list-style: none;
  border-bottom: 1px solid #fff;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Alink = styled(Link)`
  position: relative;

  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 600;
  transition: 0.7s;
`;
const Logotex = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  transition: 1.5s;
`;
const Diventrarlogin = styled.div`
  margin-left: 100px;
  display: flex;
  cursor: pointer;
`;
