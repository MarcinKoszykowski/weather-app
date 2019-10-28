import React from 'react';
import { title } from 'data/value';
import Title from 'components/Main/Title';
import Created from 'components/Created/Created';
import Form from 'components/Form/Form';

const MainTemplate = () => (
  <div>
    <Title>{title}</Title>
    <Form />
    <Created />
  </div>
);

export default MainTemplate;
