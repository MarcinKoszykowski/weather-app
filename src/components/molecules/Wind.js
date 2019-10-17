import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from 'components/atoms/Text';
import Icon from 'components/atoms/Icon';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;

  ${({ day }) =>
    day &&
    css`
      margin: 5px auto 0;

      @media screen and (max-width: 900px) {
        margin: 5px auto 35px;
      }
      @media screen and (max-width: 500px) {
        margin: 0 auto 25px;
      }
    `}
`;

const StyledText = styled(Text)`
  font-size: 1.6rem;
  letter-spacing: 1px;

  @media screen and (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 1.2rem;
    margin-right: 5px;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
    margin-right: 10px;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.4rem;
  }

  ${({ day }) =>
    day &&
    css`
      font-size: 1.5rem;
      letter-spacing: 0;

      @media screen and (max-width: 1400px) {
        font-size: 1.3rem;
      }
      @media screen and (max-width: 900px) {
        font-size: 1.5rem;
        margin-right: 10px;
      }
      @media screen and (max-width: 700px) {
        font-size: 1.3rem;
      }
    `}

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin-right: 5px;
  }
  @media screen and (max-width: 500px) {
    margin-right: 0;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.7rem;
  }
`;

const StyledIcon = styled(Icon)`
  height: 60px;
  transform: ${({ dir }) => `rotate(${dir}deg)`};
  transform-origin: 50% 50%;

  @media screen and (max-width: 1400px) {
    height: 50px;
  }
  @media screen and (max-width: 1250px) {
    height: 35px;
  }
  @media screen and (max-width: 900px) {
    height: 60px;
  }
  @media screen and (max-width: 700px) {
    height: 50px;
  }
  @media screen and (max-width: 600px) {
    height: 35px;
  }

  ${({ day }) =>
    day &&
    css`
      height: 50px;

      @media screen and (max-width: 1400px) {
        height: 40px;
      }
      @media screen and (max-width: 1250px) {
        height: 30px;
      }
      @media screen and (max-width: 900px) {
        height: 50px;
      }
      @media screen and (max-width: 700px) {
        height: 40px;
      }
      @media screen and (max-width: 600px) {
        height: 30px;
      }
    `}

  @media screen and (max-width: 500px) {
    height: 30px;
  }
  @media screen and (max-width: 350px) {
    height: 25px;
  }
`;

const Wind = ({ day, text, icon, dir }) => (
  <Wrapper day={day}>
    <StyledText day={day}>{text}</StyledText>
    <StyledIcon day={day} src={icon} dir={dir} />
  </Wrapper>
);

Wind.propTypes = {
  day: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dir: PropTypes.number.isRequired,
};

Wind.defaultProps = {
  day: false,
};

export default Wind;
