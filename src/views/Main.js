import React from 'react';
import styled from 'styled-components';
import FormMain from 'components/molecules/FormMain';
import Title from 'components/atoms/Title';
import { title } from 'data/value';
import Created from 'components/molecules/Created';

const Section = styled.section`
  align-items: center;
  padding-top: 20vh;
`;

const Main = () => (
  <Section>
    <Title>{title}</Title>
    <FormMain />
    <Created />
  </Section>
);

export default Main;
