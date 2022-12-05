import { useState, react } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/app/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FirstSection from "./components/Home/firstSection";
import TwoSection from "./components/Home/twoSection";
import Cursos from "./pages/cursos";
import Noticias from "./pages/noticias";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/usercontext";
import Hometeacher from "./pages/Hometeacher";
import User from "./pages/user";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstSection />} />
          <Route path="/curso" element={<Cursos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/chat" />
          <Route path="/login" element={<Login />} />
          <Route path="/hometeacher" element={<Hometeacher />} />
          <Route path="/user" element={<User />} />
          
        </Routes>
      </BrowserRouter>
  </UserContextProvider>
  
  );
}

export default App;
