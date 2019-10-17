import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import searchIcon from 'assets/icons/search.svg';
import { placeholder } from 'data/value';
import AppContext from 'context';
import { formAnimation } from 'styled/animations';

const Form = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
  animation: ${formAnimation} 1s ease-in-out 0.5s backwards;

  ${({ open }) =>
    open &&
    css`
      @media screen and (max-width: 900px) {
        margin: 0 auto;
      }
    `}
`;

function FormMain({ open }) {
  const { handleMainOnSubmit } = useContext(AppContext);
  const [formCity, setFormCity] = useState('');
  const inputChange = e => {
    setFormCity(e.target.value);
  };
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    handleMainOnSubmit(formCity, history);
  };

  return (
    <Form open={open} autoComplete="off" onSubmit={e => handleSubmit(e)}>
      <Input
        open={open}
        required
        type="text"
        placeholder={placeholder}
        value={formCity}
        onChange={inputChange}
      />
      <Button icon={searchIcon} />
    </Form>
  );
}

FormMain.propTypes = {
  open: PropTypes.bool,
};

FormMain.defaultProps = {
  open: false,
};

export default FormMain;
