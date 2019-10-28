import React from 'react';
import styled from 'styled-components';
import { opacityZeroToOne } from 'styled/animations';
import DailyTemplate from 'templates/DailyTemplate';
import DayTemplate from 'templates/DayTemplate';
import Created from 'components/Created/Created';

const Section = styled.section`
  margin-top: 10px;
  animation: ${opacityZeroToOne} 0.5s ease-in backwards;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const DetailsTemplate = () => (
  <Section>
    <Wrapper>
      <DailyTemplate />
      <DayTemplate />
    </Wrapper>
    <Created details />
  </Section>
);

export default DetailsTemplate;
