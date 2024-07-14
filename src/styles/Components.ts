import { styled } from "styled-components";

// Background Styles
export const BGColour = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #C6426E 0%, #642B73 100%);
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
    gap: 32px;
    flex-wrap: wrap;
    align-items: center;
    padding: 5%;
`;

export const StyledCard = styled.div`
    width: 256px;
    height: 356px;
    border-radius: 10px;

    padding: 8px;
    word-wrap: break-word;

    background-color: white;
    box-shadow: 0px 10px 0px 0px rgba(0,0,0,0.5);
`;