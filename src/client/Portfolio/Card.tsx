import * as React from 'react';
import { StyledCard } from '../../styles/Components';
import RepoType from '../../types/Repository';

const Card: React.FC<RepoType[0]> = React.memo(({ name, description }) => {
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