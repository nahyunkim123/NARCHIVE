import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const ContainerWrap = styled.div`
  width: 100%;
  margin: 0px auto;
`;

const Content = styled.p`
  height: 70px;
  font-size: 5vw;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 4vw;
  }
`;
function Type({ language, koDesc, enDesc, cnDesc, jpDesc }) {
  const DescTxt = `
  ${language === 'ko' ? koDesc : ''}
  ${language === 'en' ? enDesc : ''}
  ${language === 'cn' ? cnDesc : ''}
  ${language === 'jp' ? jpDesc : ''}

`;

  const [desc, setDesc] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDesc(DescTxt.substring(0, count + 1));
      setCount((prevCount) => prevCount + 1);
      if (count === DescTxt.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCount(0);
          setDesc('');
        }, 700);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [count, DescTxt]);

  return (
    <ContainerWrap>
      <Content>{desc}</Content>
    </ContainerWrap>
  );
}

export default Type;
