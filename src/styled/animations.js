import { keyframes } from 'styled-components';
import { setBackgroundColorWithOpacity } from 'data/functions';

const opacityZeroToOne = keyframes`
        0% {opacity: 0}
        100% {opacity: 1}
    `;
const errorAnimation = keyframes`
        0%, 100% {opacity: 0};
        30%, 70% {opacity: .8};
    `;
const titleAnimation = keyframes`100% {top: 30px; left: 70px; transform: translate(0)}`;
const formAnimation = keyframes`100% {top: 50px; right: 50px; transform: translate(0)}`;
const stormAnimation = keyframes`
        1%, 32% {${setBackgroundColorWithOpacity(0.2)}}
        21%, 71% {${setBackgroundColorWithOpacity(0.3)}}
        3%, 19%, 22%, 30%, 33%, 69%, 72% {${setBackgroundColorWithOpacity(0.6)}}`;

export { opacityZeroToOne, errorAnimation, titleAnimation, formAnimation, stormAnimation };
