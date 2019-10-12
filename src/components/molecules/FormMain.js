import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import searchIcon from 'assets/icons/search.svg';
import { placeholder } from 'data/value';

const Form = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
`;

function FormMain() {
  return (
    <Form>
      <Input required type="text" placeholder={placeholder} />
      <Button icon={searchIcon} />
    </Form>
  );
}

export default FormMain;
