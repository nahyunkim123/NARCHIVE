
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { setLanguage, setSelectedLanguage } from "./../store";

const Wrap = styled.div`
  padding: 30px;
  display: flex;

  font-size: 16px;
  div {
    cursor: pointer;
    padding-left: 10px;
  }
`;

const Kor = styled.div`

`;

const Eng = styled.div``;

const CHN = styled.div``;
const JPN = styled.div``;

function Languages() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(state => state.selectedLanguage); 
  

  const handleSelectedLanguageChange = (languageIndex) => {
    dispatch(setSelectedLanguage(languageIndex)); 
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };
  return (
    <>
      <Wrap>
        <Kor style={{ fontWeight: selectedLanguage === 1 ? '800' : '100' }}
          onClick={() => {
            handleLanguageChange("ko");
            handleSelectedLanguageChange(1);
          }}
        >
          KOR
        </Kor>
        <Eng style={{ fontWeight: selectedLanguage === 2 ? '800' : '100' }}
          onClick={() => {
            handleLanguageChange("en");
            handleSelectedLanguageChange(2);
          }}
        >
          ENG
        </Eng>
        <CHN style={{ fontWeight: selectedLanguage === 3 ? '800' : '100' }}
          onClick={() => {
            handleLanguageChange("cn");
            handleSelectedLanguageChange(3);
          }}
        >
          CHN
        </CHN>
        <JPN style={{ fontWeight: selectedLanguage === 4 ? '800' : '100' }}
          onClick={() => {
            handleLanguageChange("jp");
            handleSelectedLanguageChange(4);
          }}
        >
          JPN
        </JPN>
      </Wrap>
    </>
  );
}

export default Languages;