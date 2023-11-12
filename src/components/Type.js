import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';


const ContainerWrap = styled.div`
  width: 100%;
  
  margin: 0px auto; 
   @media screen and (max-width: 640px){
    height: 200px;
  }

`



const Content = styled.p`

font-size:5vw;
    font-weight: bold;
 

`
function Type({ language, koDesc, enDesc, cnDesc, jpDesc }) {

        

const DescTxt = `
  ${language === "ko" ? koDesc : ''}
  ${language === "en" ? enDesc : ''}
  ${language === "cn" ? cnDesc : ''}
  ${language === "jp" ? jpDesc : ''}

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
        }, 2000);
      }
  
   
    }, 200);
  
    return () => clearInterval(interval);
  }, [count, DescTxt]);


  return (
    <ContainerWrap>
     
      <Content>
      {desc}
    
    </Content>
    </ContainerWrap>
  )
}

export default Type