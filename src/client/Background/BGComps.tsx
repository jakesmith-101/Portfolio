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
    margin: 0;
`;

export const Region = styled.div`
    background: radial-gradient(#500, #000);
    margin: 0;
`;

export const Glass = styled.div`
    overflow: hidden;
    width: 100vh;
    height: 100vh;
    position: relative;
    top: -4vh;
    filter: contrast(22);
    background: linear-gradient(blue 30%, #60a 80%, #a06 100%);
    box-shadow: inset 0-5vh 1vh 1vh rgba(255, 0, 0, .6), 0 0 2.5px .2px #808;
    border-radius: 1vh 1vh 5vh 5vh/20%;
`;

export type tAnim = "linear" | "ease-in" | "ease-out" | "ease-in-out";
export const Bubble = styled.div<{ first: tAnim, second: tAnim, third: tAnim, fourth: tAnim, t1: number, t2: number, t3: number, t4: number }>`
    height: 16vh;
    border-radius: 40%;
    background: red;
    position: absolute;
    filter: blur(4vh);

    animation: ${updown} ${p => p.first} ${p => p.t1}s infinite,
        ${leftright} ${p => p.second} ${p => p.t2}s infinite,
            ${vastag} ${p => p.third} ${p => p.t3}s infinite,
                ${forog} ${p => p.fourth} ${p => p.t4}s infinite;
`;