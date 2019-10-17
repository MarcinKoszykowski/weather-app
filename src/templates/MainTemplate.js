import React from 'react';
import FormMain from 'components/molecules/FormMain';
import Title from 'components/atoms/Title';
import { title } from 'data/value';
import Created from 'components/molecules/Created';

const MainTemplate = () => (
  <>
    <Title>{title}</Title>
    <FormMain />
    <Created />
  </>
);

export default MainTemplate;
