import * as React from 'react';

const work = "jakesmith-101"; // `https://api.github.com/users/${work}/repos`
const games = "ZiarayZ"; //      `https://api.github.com/users/${games}/repos`

const Portfolio: React.FC<{}> = _ => {
    // plan to have/display an array of "cards" of each project I've done

    const [workRepos, setWork] = React.useState<any>(null);
    const [gameRepos, setGames] = React.useState<any>(null);
    const [error, setError] = React.useState<any>(null);

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

    return <>
        {error}
        <div>
            {workRepos !== null ? <pre>{JSON.stringify(workRepos, null, 2)}</pre> : 'Loading...'}
        </div>
        <div>
            {gameRepos !== null ? <pre>{JSON.stringify(gameRepos, null, 2)}</pre> : 'Loading...'}
        </div>
    </>
}

export default Portfolio;