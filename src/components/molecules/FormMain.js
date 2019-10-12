import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import searchIcon from 'assets/icons/search.svg';
import { placeholder } from 'data/value';
import AppContext from 'context';

const Form = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
`;

function FormMain() {
  const { getDailyFromApi } = useContext(AppContext);
  const [city, setCity] = useState('');

  const inputChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getDailyFromApi(city);
  };

  return (
    <Form autoComplete="off" onSubmit={e => handleSubmit(e)}>
      <Input required type="text" placeholder={placeholder} value={city} onChange={inputChange} />
      <Button icon={searchIcon} />
    </Form>
  );
}

export default FormMain;
