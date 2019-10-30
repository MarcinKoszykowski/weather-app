import React, { useState, useContext } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import AppContext from 'context';
import PropTypes from 'prop-types';
import { placeholder } from 'data/value';
import { formAnimation } from 'styled/animations';
import searchIcon from 'assets/icons/search.svg';
import Input from './atoms/Input';
import Button from './atoms/Button';
import { formOnSubmit } from '../../data/helpers';

const Wrapper = styled.form`
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

function Form({ open, location }) {
  const { setCity, setError } = useContext(AppContext);
  const history = useHistory();

  const [formCity, setFormCity] = useState('');

  const inputChange = e => {
    setFormCity(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    formOnSubmit(formCity, history, setCity, setError, location);
  };

  return (
    <Wrapper open={open} autoComplete="off" onSubmit={handleOnSubmit}>
      <Input open={open} required type="text" placeholder={placeholder} value={formCity} onChange={inputChange} />
      <Button icon={searchIcon} />
    </Wrapper>
  );
}

Form.propTypes = {
  open: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Form.defaultProps = {
  open: false,
};

export default withRouter(Form);
