import * as React from 'react';
import { PlayArea } from '../../styles/Components';
import RepoType from '../../types/Repository';
import Cards from './Cards';

const work = "jakesmith-101"; // `https://api.github.com/users/${work}/repos`
const games = "ZiarayZ"; //      `https://api.github.com/users/${games}/repos`

const Portfolio: React.FC<{}> = _ => {
    const [workRepos, setWork] = React.useState<RepoType | null>(null);
    const [gameRepos, setGames] = React.useState<RepoType | null>(null);
    const [error, setError] = React.useState<any | null>(null);

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${work}/repos`)
            .then(response => response.json())
            .then(setWork)
            .catch(setError);
        fetch(`https://api.github.com/users/${games}/repos`)
            .then(response => response.json())
            .then(setGames)
            .catch(setError);
    }, [work]);

    const repos = React.useMemo((): RepoType | null => {
        if (workRepos !== null && gameRepos !== null)
            return [...workRepos, ...gameRepos];
        else if (workRepos !== null)
            return workRepos;
        else if (gameRepos !== null)
            return gameRepos;
        else
            return null;
    }, [workRepos, gameRepos]);

    return <div>
        {error === null ? <PlayArea>
            {repos !== null ? <Cards repos={repos} /> : 'Loading...'}
        </PlayArea> : <div>
            <h3>Error:</h3>
            {error}
        </div>}
    </div>
}

// name, description
export default Portfolio;