import * as React from 'react';
import RepoType from '../../types/Repository';

interface CardProps {
    repo: RepoType[0];
}
const Card: React.FC<CardProps> = ({ repo }) => {
    return <div>
        <h6>{repo.name}</h6>
        <p>{repo.description}</p>
    </div>;
}

export default Card;



/*
get readme:
/repos/{owner}/{repo}/readme
*/