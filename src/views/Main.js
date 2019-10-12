import React from 'react';
import styled from 'styled-components';
import FormMain from 'components/molecules/FormMain';
import Title from 'components/atoms/Title';
import { title } from 'data/value';

const Wrapper = styled.div`
  align-items: center;
  padding-top: 20vh;
`;

const Main = () => (
  <Wrapper>
    <Title>{title}</Title>
    <FormMain />
  </Wrapper>
);

export default Main;
