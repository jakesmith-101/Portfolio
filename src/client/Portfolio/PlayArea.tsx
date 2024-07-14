import * as React from 'react';
import { PlayArea } from '../../styles/Components';
import RepoType from '../../types/Repository';
import Cards from './Cards';

const Portfolio: React.FC<{ users: string[] }> = ({ users }) => {
    const [repos, setRepos] = React.useState<RepoType | null>(null);
    const [error, setError] = React.useState<any[] | null>(null);

    React.useEffect(() => {
        (async () => {
            for (const user in users) {
                try {
                    const response = await fetch(`https://api.github.com/users/${user}/repos`);
                    const json: RepoType = await response.json(); // making assumptions on Type here, but should be ok for this use case...
                    setRepos(prev => {
                        if (prev === null) return json;
                        else prev.push(...json);
                        return prev;
                    });
                } catch (e) {
                    setError(prev => {
                        if (prev === null) return [e];
                        else prev.push(e);
                        return prev;
                    });
                }
            }
        })();
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