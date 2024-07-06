import { styled, keyframes, css } from 'styled-components';

export const BGColour = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
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