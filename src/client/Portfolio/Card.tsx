import * as React from 'react';
import { StyledCard } from '../../styles/Components';
import RepoType from '../../types/Repository';

const Card: React.FC<RepoType[0]> = React.memo(props => {
    const { name, description, owner } = props;
    return <StyledCard>
        <h5><a href={owner.url}>{typeof owner.name === "string" ? `@${owner.name}` : owner.url}</a></h5>
        <h6>{name}</h6>
        <p>{description}</p>
    </StyledCard>;
})

export default Card;



/*
get readme:
/repos/{owner}/{repo}/readme
*/