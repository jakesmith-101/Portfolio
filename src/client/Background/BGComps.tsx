import { keyframes, styled } from 'styled-components';

const twinkle = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`;

export const Sky = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #c5cfb7; // Old browsers
    background-image: radial-gradient(ellipse, #c5cfb7 0%, #84ad98 20%, #5f9986 39%, #5f9986 50%, #5f9986 60%, #4a8974 72%, #326565 84%, #082d47 100%);
`;

export const Stars = styled.div`
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    &>* {
        position: absolute;
        background: rgba(241, 241, 241, 1);
        border-radius: 50px;
        animation: ${twinkle} 2s infinite;
        transition-timing-function: ease-in-out;
    }
`;

export const Star = styled.div<{ pos: { top: number, left: number }, size: number, delay: number }>`
    position: relative;
    top: ${p => p.pos.top * 0.01}%;
    left: ${p => p.pos.left * 0.01}%;
    width: ${p => p.size};
    height: ${p => p.size};
    animation-delay: ${p => p.delay}s;
`;