import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage, setSelectedLanguage } from './../store';

const Wrap = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 5px;
  font-size: 16px;
  div {
    cursor: pointer;
  }
`;

const Kor = styled.div``;
const Eng = styled.div``;
const CHN = styled.div``;
const JPN = styled.div``;

function Languages() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.selectedLanguage);

  const handleSelectedLanguageChange = (languageIndex) => {
    dispatch(setSelectedLanguage(languageIndex));
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };
  return (
    <>
      <Wrap>
        <Kor
          style={{
            fontWeight: selectedLanguage === 1 ? '900' : '100',
            color: selectedLanguage === 1 ? 'black' : '#888',
          }}
          onClick={() => {
            handleLanguageChange('ko');
            handleSelectedLanguageChange(1);
          }}
        >
          KOR
        </Kor>
        <Eng
          style={{
            fontWeight: selectedLanguage === 2 ? '900' : '100',
            color: selectedLanguage === 2 ? 'black' : '#888',
          }}
          onClick={() => {
            handleLanguageChange('en');
            handleSelectedLanguageChange(2);
          }}
        >
          ENG
        </Eng>
        <CHN
          style={{
            fontWeight: selectedLanguage === 3 ? '900' : '100',
            color: selectedLanguage === 3 ? 'black' : '#888',
          }}
          onClick={() => {
            handleLanguageChange('cn');
            handleSelectedLanguageChange(3);
          }}
        >
          CHN
        </CHN>
        <JPN
          style={{
            fontWeight: selectedLanguage === 4 ? '900' : '100',
            color: selectedLanguage === 4 ? 'black' : '#888',
          }}
          onClick={() => {
            handleLanguageChange('jp');
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
