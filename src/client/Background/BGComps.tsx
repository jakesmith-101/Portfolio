import { styled, keyframes } from 'styled-components';

export const BGColour = styled.div`
    overflow: hidden;
    background-color: radial-gradient(ellipse, #1B2735 0%, #090A0F 100%);
`;

export const Container = styled.div`
    overflow: scroll;
`;


const animStar = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {		
        transform: translateY(-2000px);
    }
`;

export const FirstStarCurtain = styled.div<{ stars: string }>`
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${p => p.stars};
    animation: ${animStar} 50s linear infinite;
        
    &:after {
        content: " ";
        position: absolute;
        top: 100%;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: ${p => p.stars};
    }
`;

export const SecondStarCurtain = styled.div<{ stars: string }>`
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${p => p.stars};
    animation: ${animStar} 100s linear infinite;
        
    &:after {
        content: " ";
        position: absolute;
        top: 100%;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: ${p => p.stars};
    }
`;

export const ThirdStartCurtain = styled.div<{ stars: string }>`
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${p => p.stars};
    animation: ${animStar} 150s linear infinite;
        
    &:after
        content: " ";
        position: absolute;
        top: 100%;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: ${p => p.stars};
`;