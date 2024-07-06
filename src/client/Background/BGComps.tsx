import { styled, keyframes } from 'styled-components';

export const BGColour = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
`;
export const BGOverlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: transparent;
    z-index: 1;
    overflow: auto;
`;


const animStar = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {		
        transform: translateY(-2000px);
    }
`;


export const StarCurtain = styled.div<{ stars: string, size: number }>`
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    animation: ${animStar} 50s linear infinite;
    background: transparent;
    box-shadow: ${p => p.stars};
        
    &:after {
        width: ${p => p.size}px;
        height: ${p => p.size}px;
        content: " ";
        position: absolute;
        top: 100%;
        background: transparent;
        box-shadow: ${p => p.stars};
    }
`;