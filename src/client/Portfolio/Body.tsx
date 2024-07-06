import * as React from 'react';
import RepoType from '../../types/Repository';
import Cards from './Cards';

const work = "jakesmith-101"; // `https://api.github.com/users/${work}/repos`
const games = "ZiarayZ"; //      `https://api.github.com/users/${games}/repos`

const Portfolio: React.FC<{}> = _ => {
    const [repos, setRepos] = React.useState<RepoType | null>(null);
    const [error, setError] = React.useState<any | null>(null);

    const repoSetter = React.useCallback((json: any) => setRepos(rep => {
        if (rep !== null && Array.isArray(json))
            rep.push(...json);
        else if (Array.isArray(json))
            return json;
        return rep;
    }), []);

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${work}/repos`)
            .then(response => response.json())
            .then(repoSetter)
            .catch(setError);
        fetch(`https://api.github.com/users/${games}/repos`)
            .then(response => response.json())
            .then(repoSetter)
            .catch(setError);
    }, [work]);

    return <div>
        {error === null ? <div>
            {repos !== null ? <Cards repos={repos} /> : 'Loading...'}
        </div> : <div>
            <h3>Error:</h3>
            {error}
        </div>}
    </div>
}

// name, description
export default Portfolio;