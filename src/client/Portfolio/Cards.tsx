import * as React from 'react';
import { StyledCards } from '../../styles/Components';
import RepoType from '../../types/Repository';
import Card from './Card';

interface CardsProps {
    repos: RepoType;
}
const Cards: React.FC<CardsProps> = ({ repos }) => {
    return <StyledCards>
        {
            repos.map(card => <Card key={card.id} {...card} />)
        }
    </StyledCards>
}

export default Cards;