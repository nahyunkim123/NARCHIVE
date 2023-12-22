import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import data from './../data/lang.json';
import './../index.css';
import Title from './Title';

const Content = styled.div`
  width: 100%;
  margin-top: 160px;
  padding-top: 0px 60px;
  color: ${(props) => props.theme.colors.Color};
`;

const ContentWrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 80%;
  > span {
    font-size: 34px;
    font-weight: bold;
  }
`;


const SkillContent = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    line-height: 40px;
    font-size: 17px;
  }
`;

const LeftCon = styled.div`
  flex-basis: 49.5%;
  > h3 {
    font-size: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.Color};
    padding-bottom: 3px;
  }
  @media screen and (max-width: 640px) {
    flex-basis: 100%;
  }
`;
const RightCon = styled.div`
  flex-basis: 49.5%;
  > h3 {
    font-size: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.Color};
    padding-bottom: 3px;
  }
  @media screen and (max-width: 640px) {
    flex-basis: 100%;
  }
`;


function About() {
  const [sources, setSources] = useState([]);
  const [sources3, setSources3] = useState([]);
  const [sources4, setSources4] = useState([]);

  useEffect(() => {
    setSources(data.Skill[0].Frontend);
    setSources3(data.Skill[0].Tools);
    setSources4(data.Skill[0].Database);
  }, []);

  return (
    <>
      <Content>
        <ContentWrap>
          <Title text="SKILL"/>
          <SkillContent>
            <LeftCon>
              <h3>Frontend</h3>
              {sources.map((e, i) => {
                return (
                  <div key={e.name}>
                    <p>{e.name}</p>
                  </div>
                );
              })}
            </LeftCon>
            <RightCon>
              <h3>Database</h3>
              {sources4.map((e, i) => {
                return (
                  <div key={e.name}>
                    <p>{e.name}</p>
                  </div>
                );
              })}
              <h3>Tools</h3>
              {sources3.map((e, i) => {
                return (
                  <div key={e.name}>
                    <p>{e.name}</p>
                  </div>
                );
              })}
            </RightCon>
          </SkillContent>
        </ContentWrap>
      </Content>
    </>
  );
}

export default About;
