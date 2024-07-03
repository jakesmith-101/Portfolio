import { styled, keyframes } from 'styled-components';

const updown = keyframes`
    0% { top: 110%; }
    50% { top: 0; }
    100% { top: 110%; }
`;

const leftright = keyframes`
    0% { left: 0; }
    50% { left: 80%; }
    100% { left: 0; }
`;

const vastag = keyframes`
    0% { width: 8vh; }
    50% { width: 32vh; }
    100% { width: 8vh; }
`;

const forog = keyframes`
    100% { transform: rotate(360deg); }
`;



export const Lamp = styled.div`
    width: 100vh;
    height: 100vh;
    margin: 0 auto;
`;

export const Region = styled.div`
    background: radial-gradient(#500, #000);
    margin: 0;
`;


export const Bubble = styled.div`
    height: 16vh;
    border-radius: 40%;
    background: red;
    position: absolute;
    filter: blur(4vh);
`;


export const Glass = styled.div`
    overflow: hidden;
    width: 100%;
    height: 90vh;
    position: relative;
    top: -4vh;
    transform: perspective(100vh) rotateX(12deg);
    filter: contrast(22);
    background: linear-gradient(blue 30%, #60a 80%, #a06 100%);
    box-shadow: inset 0-5vh 1vh 1vh rgba(255, 0, 0, .6), 0 0 2.5px .2px #808;
    border-radius: 1vh 1vh 5vh 5vh/20%;

    ${Bubble}:first-child {
        animation: ${updown} linear 37s infinite,
            ${leftright} ease-in-out 23s infinite,
                ${vastag} linear 29s infinite,
                    ${forog} linear 31s infinite;
    }

    ${Bubble}:nth-child(2) {
        animation: ${updown} ease-in 41s infinite,
            ${leftright} ease-in-out 47s infinite,
                ${vastag} linear 23s infinite,
                    ${forog} linear 29s infinite;
    }

    ${Bubble}:nth-child(3) {
        animation: ${updown} ease-out 43s infinite,
            ${leftright} ease-in-out 53s infinite,
                ${vastag} linear 29s infinite,
                    ${forog} linear 31s infinite;
    }

    ${Bubble}:nth-child(4) {
        animation: ${updown} ease-in-out 47s infinite,
            ${leftright} ease-in-out 59s infinite,
                ${vastag} linear 31s infinite,
                    ${forog} linear 41s infinite;
    }

    ${Bubble}:nth-child(5) {
        animation: ${updown} ease-in-out 29s infinite,
            ${leftright} ease-in-out 31s infinite,
                ${vastag} linear 37s infinite,
                    ${forog} linear 47s infinite;
    }

    ${Bubble}:last-child {
        animation: ${updown} linear 53s infinite,
            ${leftright} ease-in-out 29s infinite,
                ${vastag} linear 19s infinite,
                    ${forog} linear 37s infinite;
    }
`;