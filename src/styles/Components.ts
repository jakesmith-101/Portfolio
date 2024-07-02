import { css, keyframes, styled } from "styled-components";


// Component Styles
export const StyledTitle = styled.h1`
    margin: 0;
`;

export const StyledCards = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    align-items: center;
`;

export const StyledCard = styled.div`
    width: 256px;
    height: 356px;
    border-radius: 10px;

    padding: 8px;
    word-wrap: break-word;

    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.5);
`;






// Background Styles
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
    height: 100vh;
    width: 100%;
    background-color: #c5cfb7; // Old browsers
    filter-gradient: #c5cfb7, #082d47, horizontal;
    background-image: radial-gradient(center, ellipse cover, #c5cfb7 0%, #84ad98 20%, #5f9986 39%, #5f9986 50%, #5f9986 60%, #4a8974 72%, #326565 84%, #082d47 100%);
`;


export const Star = styled.div<{ position: { top: number, left: number }, size: number, animationDelay: number }>`
    position: relative;
    top: ${p => p.position.top * 0.01}%;
    left: ${p => p.position.left * 0.01}%;
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    animation-delay: ${p => p.animationDelay}s;
`;
export const Stars = styled.div`
    top: 0;
    left: 0;
    right: 0;
    height: 80%;
    z-index: -1;

    &>* {
        position: absolute;
        background: rgba(241, 241, 241, 1);
        border-radius: 50px;
        animation: ${twinkle} 2s infinite;
        transition-timing-function: ease-in-out;
    }
`;
export const SkyContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
`;
export const ContainerTop = styled.div`
    position: relative;
    height: 75vh;
    width: 100 %;
`;