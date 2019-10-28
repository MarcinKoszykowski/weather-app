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
const topLeftIconLoadingAnimation = value => keyframes`
    0% {transform: translate(0, 0)}
    25% {transform: translate(${value}, 0)}
    50% {transform: translate(${value}, ${value})}
    75% {transform: translate(0, ${value})}
    100% {transform: translate(0, 0)}
`;
const topRightIconLoadingAnimation = (value, minusValue) => keyframes`
    0% {transform: translate(0, 0)}
    25% {transform: translate(0, ${value})}
    50% {transform: translate(${minusValue}, ${value})}
    75% {transform: translate(${minusValue}, 0)}
    100% {transform: translate(0, 0)}
`;
const bottomLeftIconLoadingAnimation = (value, minusValue) => keyframes`
    0% {transform: translate(0, 0)}
    25% {transform: translate(0, ${minusValue})}
    50% {transform: translate(${value}, ${minusValue})}
    75% {transform: translate(${value}, 0)}
    100% {transform: translate(0, 0)}
`;
const bottomRightIconLoadingAnimation = value => keyframes`
    0% {transform: translate(0, 0)}
    25% {transform: translate(${value}, 0)}
    50% {transform: translate(${value}, ${value})}
    75% {transform: translate(0, ${value})}
    100% {transform: translate(0, 0)}
`;

export {
  opacityZeroToOne,
  errorAnimation,
  stormAnimation,
  titleAnimation,
  formAnimation,
  topLeftIconLoadingAnimation,
  topRightIconLoadingAnimation,
  bottomRightIconLoadingAnimation,
  bottomLeftIconLoadingAnimation,
};
