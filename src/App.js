
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import GloabalStyle from "./components/GlobalStyle"

import { useEffect, useState } from 'react';
import Project from './pages/Project';
import NotFound from './pages/NotFound';


import About from './pages/About';

import Aside from './components/Aside';

import DragSet from "./components/DragSet";
import Mnav from './components/Mnav';
import PCNav from './components/PCNav';
import { ThemeProvider, styled } from 'styled-components';
import { AnimatePresence } from "framer-motion";
import { Provider } from 'react-redux';
import GlobalStyle from './components/GlobalStyle';
import { Link } from 'react-router-dom';




const Nav = styled.div`
@media screen and (max-width:769px){
        display: none;
        
    }
`
const HamBtn = styled.div`
    @media screen and (min-width:769px){
        display: none;
        
    }
`

function App() {




  const light = {
    colors : {
      Primary : "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);",
      Secondary : "#eee",
      BgColor : "#fff;",
      Color : "#101010",
      ContentBg : "#fff"
      
  
    }
  }
  const dark ={
    colors : {
      Primary : "#333",
      Secondary : "#707173",
      BgColor : "#333",
      Color : "#fff",
      ContentBg : "#424242",
      SelectBg : "#707173"
  
    }
  } 
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = () =>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }
  const location = useLocation();

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };


  return (
  
 
      <ThemeProvider theme={DarkMode}>
           
         <>
         <Nav>

              <PCNav/>
         </Nav>
              <HamBtn>

              <Mnav toggleNav={toggleNav} navOpen={navOpen} setNavOpen={setNavOpen}/>
              </HamBtn>
              <GlobalStyle/>
              <DragSet ThemeSelect={ThemeSelect}  themeConfig={themeConfig}/>
                <AnimatePresence>
                  <Routes location={location} key={location.pathname}>
                   
                    <Route path="/" element={<About navOpen={navOpen} setNavOpen={setNavOpen}/>} />
                    <Route path="/project" element={<Project navOpen={navOpen} setNavOpen={setNavOpen}/>} />
                    <Route path="/*" element={<NotFound/>} />
                    
                  </Routes>
                </AnimatePresence>
                <Aside/>
              </>



        </ThemeProvider>
  );
}

export default App;
