import { keyframes } from 'styled-components';
import { getBackgroundColorWithOpacity } from 'data/functions';

const opacityZeroToOne = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;
const errorAnimation = keyframes`
    0%, 100% {opacity: 0};
    30%, 70% {opacity: .8};
`;
const stormAnimation = keyframes`
    1%, 32% {${getBackgroundColorWithOpacity(0.2)}}
    21%, 71% {${getBackgroundColorWithOpacity(0.3)}}
    3%, 19%, 22%, 30%, 33%, 69%, 72% {${getBackgroundColorWithOpacity(0.6)}}
`;
const titleAnimation = keyframes`
    0% {transform: translateX(-800px); opacity: 0}
    70% {transform: translateX(100px)}
    100% {transform: translateX(0); opacity: 1}
`;
const formAnimation = keyframes`
    0% {transform: translateX(800px); opacity: 0}
    70% {transform: translateX(-100px)}
    100% {transform: translateX(0); opacity: 1}
`;
const loadingAnimation = keyframes`
    0% {transform: translateY(20vh)}
    50% {transform: translateY(-20vh)}
    100% {transform: translateY(20vh)}
`;

export { loadingAnimation, opacityZeroToOne, errorAnimation, stormAnimation, titleAnimation, formAnimation };
