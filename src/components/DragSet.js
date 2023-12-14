import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import data from './../data/lang.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faMinus,
  faMoon,
  faPlus,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import Lang from './../components/Lang';
import { useSelector } from 'react-redux';

const NavWrap = styled.div`
  position: fixed;
  top: 26%;
  right: 2%;
  width: 70px;
  z-index: 1000000;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  color: ${(props) => props.theme.colors.Color};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  @media screen and (max-width: 768px) {
    display: none;
  }
  transform: ${(props) => (props.isActive ? 'scale(3)' : 'scale(1)')};
`;

const DragBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: rgba(250, 250, 250, 0.5);
  border-bottom: 1px solid #e6e6e6;
  backdrop-filter: blur(12px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 20px;
  height: 1px;
  background: gray;
  &:nth-child(2) {
  }
`;

const NavLi = styled.div`
  height: 70px;
  flex-wrap: wrap;
  text-align: center;
  border-bottom: 1px solid #eee;
  line-height: 70px;
`;

const MagWrap = styled(NavLi)`
  position: relative;
`;

const MagIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
  flex-basis: 44%;
  border: 1px solid ${(props) => props.theme.colors.Color};
  position: absolute;

  &:nth-child(1) {
    right: 10px;
    bottom: 4px;
  }
  &:nth-child(2) {
    left: 10px;
    bottom: 4px;
  }
`;

const ZoomPercentage = styled.span`
  position: absolute;
  font-weight: bold;
  left: 17px;
  bottom: 20px;
  font-size: 14px;
`;

function DragSet({ ThemeSelect, themeConfig }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setDragging] = useState(false);
  const [sources, setSources] = useState([]);
  const language = useSelector((state) => state.language);
  const [isActive, setIsActive] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    setSources(data.Nav);
  }, []);

  const handleStart = () => {
    setDragging(true);
  };

  const handleDrag = (e, ui) => {
    if (isDragging) {
      const { x, y } = ui;
      setPosition({ x, y });
    }
  };

  const handleStop = () => {
    setDragging(false);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

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

  return (
    <Draggable
      position={position}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <NavWrap isActive={isActive} onClick={toggleActive}>
        <DragBar onClick={() => setIsActive(!isActive)}>
          <Line></Line>
          <Line></Line>
        </DragBar>
        <NavLi onClick={ThemeSelect}>
          <FontAwesomeIcon
            icon={themeConfig === 'light' ? faMoon : faSun}
            size='lg'
          />
        </NavLi>
        <MagWrap>
          <MagIcon icon={faMagnifyingGlass} />

          <ZoomPercentage>{zoomLevel}%</ZoomPercentage>
          <IconWrap>
            <Icon icon={faMinus} onClick={handleZoomOut} />
            <Icon icon={faPlus} onClick={handleZoomIn} />
          </IconWrap>
        </MagWrap>
        <NavLi>
          <Lang />
        </NavLi>
      </NavWrap>
    </Draggable>
  );
}

export default DragSet;
