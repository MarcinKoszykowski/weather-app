import React, { useContext } from 'react';
import styled from 'styled-components';
import { opacityZeroToOne } from 'styled/animations';
import AppContext from 'context';
import DailyTemplate from '../templates/DailyTemplate';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  animation: ${opacityZeroToOne} 1.5s ease-in backwards;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

function Details() {
  const { open } = useContext(AppContext);

  return <Section>{open && <DailyTemplate />}</Section>;
}

export default Details;
