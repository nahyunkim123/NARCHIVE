
import styled from "styled-components";
import { motion } from "framer-motion";
import Education from "./../components/Education"
import Skill from "./../components/Skill"
import Profile from "./../components/Profile"
import YearBook from "./../components/YearBook"
import Info from "./../components/Info"
import Copyright from "./../components/Copyright"
import Contact from "./../components/Contact"
import Background from "../components/Background";



const BG = styled.div`
  width: 100%;
  background:  ${(props) => props.theme.colors.BgColor};
  color: ${(props) => props.theme.colors.Color};

`



const Window = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  color: ${(props) => props.theme.colors.Color};
  position: relative;
  z-index: 1000;
`;




const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;
`




function About ({setNavOpen}) {

  return (

    <>
    <Background/>
    <BG onClick={(()=>setNavOpen(false))}>
    
      <motion.div

      animate={{ opacity: 1 }}
      exit={{opacity:0}}
      transition={{ duration: 1 }}
    >
      <Window>
 
     
          <Profile/>
          <Info/>
          <Skill/>
          <Education/>
          <Wrap>
            <YearBook/>
          </Wrap>
          <Contact/>
    
      </Window>
      </motion.div>
    
      </BG>
    </>
  );
};

export default About;
