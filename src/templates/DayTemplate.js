import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Day from 'components/Day/Day';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 40px 0 20px;
  transition: margin 0.2s;

  @media screen and (max-width: 1400px) {
    margin: 0 40px 0 10px;
  }
  @media screen and (max-width: 1250px) {
    margin: 0 20px 0 5px;
  }
  @media screen and (max-width: 900px) {
    width: 635px;
    margin: 0 auto 10px;
  }
  @media screen and (max-width: 700px) {
    width: 97%;
  }
`;

const DayTemplate = () => {
  const { daily } = useContext(AppContext);

  return (
    <Wrapper>
      {daily.map(day => (
        <Day key={day.valid_date} {...day} />
      ))}
    </Wrapper>
  );
};

export default DayTemplate;
