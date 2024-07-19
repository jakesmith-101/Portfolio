import { css, styled } from "styled-components";

// Background Styles
export const BGColour = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #642B73 0%, #C6426E 100%);
`;
export const BGOverlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: transparent;
    z-index: 1;
    overflow: auto;
`;

// Component Styles
export const PlayArea = styled.div``;

export const StyledCards = styled.div`
    display: flex;
    gap: 64px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5%;
`;

const shadowColour = `rgba(0,0,0,0.33)`;
const cardWidth = 256;
const cardHeight = 356;
const cardPadding = 10;
export const CardShadow = styled.div`
    border-radius: 15px;
    width: ${cardWidth + 2 * cardPadding}px;
    height: ${cardHeight + 2 * cardPadding}px;
    background: ${shadowColour};
    box-shadow: 0px 0px 0px 0px ${shadowColour};
    perspective: 1800px;
`;
export const StyledCard = styled.div`
    display: inline-block;
    border-radius: 15px;
    width: ${cardWidth}px;
    height: ${cardHeight}px;
    padding: ${cardPadding}px;

    word-wrap: break-word;

    perspective: 1800px;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;

    background-color: white;
    transform: translateZ(0px) translateY(0px);
    transition: transform 200ms ease-out;
    &:hover {
        transform: translateZ(60px) translateY(-10px);
    }
`;

export const CardLabel = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
`;
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 5px;
    width: 100%;
    height: 100%;

    ${CardLabel}:last-of-type {
        margin-top: auto;
    }
`;

export const CardExpansion = styled.h6`
    margin: 0;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
`;

export const CardDescription = styled.p`
    margin: 0;
    align-self: stretch;
`;

export const CardName = styled.h5`
    margin: 0;
    justify-self: stretch;
`;

export const CardCost = styled.h5`
    margin: 0;
    justify-self: right;
`;

export const CardAttack = styled.h5`
    margin: 0;
    justify-self: left;
`;
export const CardHealth = styled.h5`
    margin: 0;
    justify-self: right;
`;