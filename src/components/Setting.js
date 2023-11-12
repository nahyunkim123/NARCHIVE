import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { faGear,faMagnifyingGlass,faMinus,faMoon, faPlus } from '@fortawesome/free-solid-svg-icons';
import Lang from './../components/Lang'



const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;
  @media screen and (max-width:768px){
        display: none;
        
    }

`


const SetBtn = styled.div`

  position: relative;

  width: 60px;
  height: 60px;
  border: 1px solid black;
  background: ${props => (props ? '#000' : 'transparent')};
  cursor: pointer; 
  line-height: 60px;
  font-size: 30px;
  text-align: center;
  svg{
    transition: 0.5s;
    color: ${ props => (props ? 'whitesmoke' : 'black')};
  }
  &:hover{
    background-color: black;
  }
  &:hover >svg{
    transform: rotate(30deg);
    color: whitesmoke;
  }

`


const MagnifierButton = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  text-align: center;
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 140px;
  line-height: 32px;
  background-color: #fff;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  cursor: pointer;
 
`;

const MagIcon = styled(FontAwesomeIcon)`
  font-size: 20px;

`

const DarkModeButton = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background: white;
  top: 70px;

  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  cursor: pointer;
`;

const IconWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-between;
`

const Icon = styled(FontAwesomeIcon)`
  height: 18px;
  font-size: 10px;
  flex-basis: 44%;
  border: 1px solid #000;
  
`;
const ZoomPercentage = styled.span`
  font-weight: bold;
  font-size: 14px;
`;


const LangBox = styled.button`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 210px;
  border: none;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 3s ease-in-out;
  cursor: pointer;
  background: none;
`;



const StyledButtons = () => {






    const [zoomLevel, setZoomLevel] = useState(100);

    const handleZoomOut = () => {
        if (zoomLevel > 50) {
        setZoomLevel(zoomLevel - 10);
        adjustZoom(zoomLevel - 10);
        }
    };

    const handleZoomIn = () => {
        if (zoomLevel < 200) {
        setZoomLevel(zoomLevel + 10);
        adjustZoom(zoomLevel + 10);
        }
    };
    const adjustZoom = (level) => {
        document.documentElement.style.zoom = `${level}%`;
    };

    const [showButtons, setShowButtons] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const handleSettingClick = () => {
    setShowButtons(!showButtons);
    setIsClicked(!isClicked)
  };




  return (
    <Container>
       <SetBtn isClicked={isClicked} onClick={handleSettingClick}>
        <FontAwesomeIcon icon={faGear} />
        </SetBtn>

     <DarkModeButton show={showButtons}>

          <FontAwesomeIcon icon={faMoon}/>
    </DarkModeButton>


          <MagnifierButton show={showButtons}>
            <MagIcon icon={faMagnifyingGlass} />
            <ZoomPercentage>{zoomLevel}%</ZoomPercentage>
            <IconWrap>
              <Icon icon={faMinus} onClick={handleZoomOut} />
              <Icon icon={faPlus} onClick={handleZoomIn} />
            </IconWrap>
          </MagnifierButton>
       
          <LangBox show={showButtons}>
              <Lang/>
          </LangBox>  
        
   
        
     </Container>
  );
};

export default StyledButtons;
