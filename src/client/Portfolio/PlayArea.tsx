import * as React from 'react';
import { PlayArea } from '../../styles/Components';
import RepoType from '../../types/Repository';
import Cards from './Cards';

const work = "jakesmith-101"; // `https://api.github.com/users/${work}/repos`
const games = "ZiarayZ"; //      `https://api.github.com/users/${games}/repos`

const Portfolio: React.FC<{ users: string[] }> = ({ users }) => {
    const [repos, setRepos] = React.useState<RepoType | null>(null);
    const [error, setError] = React.useState<any[] | null>(null);

    React.useEffect(() => {
        users.forEach(user => {
            fetch(`https://api.github.com/users/${user}/repos`)
                .then(response => response.json())
                .then(setRepos)
                .catch(e => {
                    setError(prev => {
                        if (prev === null) return [e];
                        else prev.push(e);
                        return prev;
                    })
                });
        });
    }, [users.join(",")]);

    return <div>
        {error === null ? <PlayArea>
            {repos !== null ? <Cards repos={repos} /> : 'Loading...'}
        </PlayArea> : <div>
            <h3>Error:</h3>
            {error.map((e, id) => <div key={id}>{e}</div>)}
        </div>}
    </div>
}

// name, description
export default Portfolio;