import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setLanguage, setSelectedLanguage } from "./../store";

const LanguageSelector = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 200;
`;

const CurrentLanguage = styled.div`
  font-weight: bold;
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 60px;
`;

const LanguageOptions = styled.ul`
  position: absolute;
  top: 0;
  left: -70px;
  opacity: ${(props) => (props.isopen ? 1 : 0)};
  backdrop-filter: blur(12px);
  transition: 0.3s ease-in;
  flex-direction: column;
  color: gray;
  list-style: none;
  padding: 0;
  margin: 0;

`;

const LanguageOption = styled.li`
  cursor: pointer;
  width: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #eee;
  margin-bottom: 5px;

  color: ${(props) => props.theme.colors.Color};

  &:hover {
    font-weight: bold;
    color: ${(props) => props.theme.colors.Color};
  }
`;

function LanguageSwitcher() {

  const [currentLanguage, setCurrentLanguage] = useState("한국어");
  const [isLanguageOptionsOpen, setIsLanguageOptionsOpen] = useState(false);
  

  const handleLanguageClick = (language) => {
    setCurrentLanguage(language);
    setIsLanguageOptionsOpen(!isLanguageOptionsOpen);
  };

  const dispatch = useDispatch();

  const handleSelectedLanguageChange = (languageIndex) => {
    dispatch(setSelectedLanguage(languageIndex));
    setIsLanguageOptionsOpen(false); 
  
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
    setIsLanguageOptionsOpen(false); 
 
   
  };

  return (
    <LanguageSelector>
      <CurrentLanguage onClick={() => handleLanguageClick(currentLanguage)}>
        {currentLanguage}
      </CurrentLanguage>
      <LanguageOptions isopen={isLanguageOptionsOpen}>
        <LanguageOption
          isopen={isLanguageOptionsOpen}
          onClick={() => {
            handleLanguageClick("한국어");
            handleLanguageChange("ko");
            handleSelectedLanguageChange(1);
          }}
        >
          한국어
        </LanguageOption>
        <LanguageOption
          isopen={isLanguageOptionsOpen}
          onClick={() => {
            handleLanguageClick("ENG");
            handleLanguageChange("en");
            handleSelectedLanguageChange(2);
            
          }}
        >
          ENG
        </LanguageOption>
        <LanguageOption
          isopen={isLanguageOptionsOpen}
          onClick={() => {
            handleLanguageClick("中文");
            handleLanguageChange("cn");
            handleSelectedLanguageChange(3);
          }}
        >
          中文
        </LanguageOption>
        <LanguageOption
          isopen={isLanguageOptionsOpen}
          onClick={() => {
            handleLanguageClick("日本語");
            handleLanguageChange("jp");
            handleSelectedLanguageChange(4);
          }}
        >
          日本語
        </LanguageOption>
      </LanguageOptions>
    </LanguageSelector>
  );
}

export default LanguageSwitcher;
