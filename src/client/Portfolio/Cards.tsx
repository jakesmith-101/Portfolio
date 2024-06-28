import * as React from 'react';
import RepoType from '../../types/Repository';
import Card from './Card';

interface CardsProps {
    repos: RepoType;
}
const Cards: React.FC<CardsProps> = props => {
    return <div>
        {
            props.repos.map(card => <Card key={card.id} repo={card} />)
        }
    </div>
}

export default Cards;