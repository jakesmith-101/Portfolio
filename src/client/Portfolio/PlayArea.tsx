import * as React from 'react';
import { CardShadow, PlayArea, StyledCards } from '../../styles/Components';
import RepoType from '../../types/Repository';
import Cards from './Cards';

const Portfolio: React.FC<{ users: string[] }> = ({ users }) => {
    const [repos, setRepos] = React.useState<RepoType | null>(null);
    const [error, setError] = React.useState<any | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const userRepos = await Promise.all(users.map(user => fetch(`https://api.github.com/users/${user}/repos`)));
                const json: RepoType[] = await Promise.all(userRepos.map(repos => repos.json())); // making assumptions on Type here, but should be ok for this use case...
                setRepos(json.flat());
            } catch (e) {
                setError(e);
            }
        })();
    }, [users.join(",")]);

    return <div>
        {error === null ? <PlayArea>
            <StyledCards>
                <CardShadow id="selected" />
            </StyledCards>
            {repos !== null ? <Cards repos={repos} /> : 'Loading...'}
        </PlayArea> : <div>
            <h3>Error:</h3>
            <div>{error}</div>
        </div>}
    </div>
}

// name, description
export default Portfolio;