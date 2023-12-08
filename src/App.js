
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Aside from './components/Aside';
import DragSet from "./components/DragSet";
import Mnav from './components/Mnav';
import PCNav from './components/PCNav';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from "framer-motion";
import GlobalStyle from './components/GlobalStyle';
import Copyright from './components/Copyright';
import MetaTag from './components/MetaTag';





function App() {




  const light = {
    colors : {
      Primary : "#fff",
      Secondary : "#F9F9F9",
      BgColor : "#fff",
      Color : "#101010",
      ContentBg : "#fff"
      
  
    }
  }
  const dark ={
    colors : {
      Primary : "#333",
      Secondary : "#424242",
      BgColor : "#333",
      Color : "#efefef",
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
        <MetaTag title="NARCHIVE" description="프론트엔드 개발자 김나현 포트폴리오입니다" 
              keywords="프론트엔드, 리액트, 개발자, 포트폴리오, 프론트엔드포트폴리오" lang="kr,en,cn,jp"/>
          <PCNav/> 
          <Mnav toggleNav={toggleNav} navOpen={navOpen} setNavOpen={setNavOpen} />
          <GlobalStyle/>
          <DragSet ThemeSelect={ThemeSelect} themeConfig={themeConfig} />
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>  
              <Route path="/" element={<About navOpen={navOpen} setNavOpen={setNavOpen} />} />
              <Route path="/project" element={<Project navOpen={navOpen} setNavOpen={setNavOpen}/>} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
          </AnimatePresence>
        <Aside/>
        <Copyright/>
        </ThemeProvider>
  );
}

export default App;
