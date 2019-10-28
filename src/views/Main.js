import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import Error from 'components/Error/Error';

const Section = styled.section`
  align-items: center;
  padding-top: 20vh;
`;

const Main = () => (
  <Section>
    <MainTemplate />
    <Error />
  </Section>
);

export default Main;
