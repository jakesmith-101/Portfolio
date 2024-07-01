import * as React from 'react';
import { StyledCard } from '../../styles/Components';
import RepoType from '../../types/Repository';

interface CardProps {
    repo: RepoType[0];
}
const Card: React.FC<CardProps> = React.memo(({ repo: { name, description } }) => {
    return <StyledCard>
        <h6>{name}</h6>
        <p>{description}</p>
    </StyledCard>;
})

export default Card;



/*
get readme:
/repos/{owner}/{repo}/readme
*/