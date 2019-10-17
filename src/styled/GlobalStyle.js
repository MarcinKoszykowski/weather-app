import { createGlobalStyle } from 'styled-components';
import { opacityZeroToOne, stormAnimation } from 'styled/animations';
import { colorWithOpacity, black, darkBlue } from 'styled/colors';
import backgroundImage from 'assets/images/background.jpg';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap&subset=latin-ext');

*, *::after, *::before {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    color: inherit;
    font-weight: inherit;
    font-style: inherit;
    box-sizing: inherit;
    vertical-align: baseline;
    text-decoration-line: none;
    list-style: none;
}
body {
    min-width: 315px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    overflow-x: hidden;
    animation: ${opacityZeroToOne} .5s ease-in backwards;

    &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        height: 150%;
        width: 100%;
        background-color: ${colorWithOpacity(black, 0.5)};
        animation: ${stormAnimation} 10s ease 3s infinite;
        z-index: -1;
    }

    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        height: 150%;
        width: 100%;
        background-color: ${darkBlue};
        background: url(${backgroundImage}) no-repeat;
        background-size: cover;
        z-index: -2;
    }
}
`;

export default GlobalStyle;
