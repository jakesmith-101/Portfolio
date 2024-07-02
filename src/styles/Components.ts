import { styled } from "styled-components";


// Component Styles
export const StyledTitle = styled.h1`
    margin: 0;
`;

export const StyledCards = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    align-items: center;
    margin: 10%;
`;

export const StyledCard = styled.div`
    width: 256px;
    height: 356px;
    border-radius: 10px;

    padding: 8px;
    word-wrap: break-word;

    background-color: white;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.5);
`;