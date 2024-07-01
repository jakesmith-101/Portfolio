import * as React from 'react';
import RepoType from '../../types/Repository';
import Cards from './Cards';

const work = "jakesmith-101"; // `https://api.github.com/users/${work}/repos`
const games = "ZiarayZ"; //      `https://api.github.com/users/${games}/repos`

const Portfolio: React.FC<{}> = _ => {
    // plan to have/display an array of "cards" of each project I've done

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

    return <div>
        {error === null ? <>
            <div>
                <h3><a href='https://github.com/jakesmith-101'>Jake Smith</a></h3>
                {workRepos !== null ? <Cards repos={workRepos} /> : 'Loading...'}
            </div>
            <div>
                <h3><a href='https://github.com/ZiarayZ'>ZiarayZ</a></h3>
                {gameRepos !== null ? <Cards repos={gameRepos} /> : 'Loading...'}
            </div>
        </> : <div>
            <h3>Error:</h3>
            {error}
        </div>}
    </div>
}

// name, description
export default Portfolio;