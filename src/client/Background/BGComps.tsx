import { styled, keyframes, css } from 'styled-components';

export const BGColour = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
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

const StarCurtain = css<{ stars: string }>`
    background: transparent;
    box-shadow: ${p => p.stars};
`;
const AfterStarCurtain = css<{ stars: string }>`
    content: " ";
    position: absolute;
    top: 100%;
    background: transparent;
    box-shadow: ${p => p.stars};
`;

export const FirstStarCurtain = styled.div<{ stars: string }>`
    width: 1px;
    height: 1px;
    animation: ${animStar} 50s linear infinite;
    ${StarCurtain}
        
    &:after {
        width: 1px;
        height: 1px;
        ${AfterStarCurtain}
    }
`;

export const SecondStarCurtain = styled.div<{ stars: string }>`
    width: 2px;
    height: 2px;
    animation: ${animStar} 100s linear infinite;
    ${StarCurtain}

    &:after {
        width: 2px;
        height: 2px;
        ${AfterStarCurtain}
    }
`;

export const ThirdStartCurtain = styled.div<{ stars: string }>`
    width: 3px;
    height: 3px;
    animation: ${animStar} 150s linear infinite;
    ${StarCurtain}

    &:after {
        width: 3px;
        height: 3px;
        ${AfterStarCurtain}
    }
`;