import * as React from 'react';
import { StyledCard } from '../../styles/Components';
import RepoType from '../../types/Repository';
import { calcValue } from '../Parallax/Functions';

const Card: React.FC<RepoType[0]> = React.memo(props => {
    const { name, description, owner, html_url, id } = props;
    const [timeout, setTimeout] = React.useState<number>();

    const handleMouseMove = React.useCallback(({ x, y }: { x: number, y: number }) => {
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        setTimeout(window.requestAnimationFrame(() => {

            const card = document.getElementById(`${id}`);
            if (card !== null) {
                const yValue = calcValue(y - card.clientTop, card.clientHeight);
                const xValue = calcValue(x - card.clientLeft, card.clientWidth);
                card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

                const texts = Array.from(card.children);
                [].forEach.call(texts, (text: Element) => {
                    if (text.tagName.toUpperCase() === "DIV")
                        (text as HTMLDivElement).style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
                });
            }
        }));
    }, [id, timeout, setTimeout]);

    React.useEffect(() => {
        const card = document.getElementById("card");
        if (card !== null)
            card.addEventListener('mousemove', handleMouseMove, false);

        // cleanup this component
        return () => {
            if (card !== null)
                card.removeEventListener('mousemove', handleMouseMove, false);
        };
    }, []);

    return <StyledCard id={`${id}`}>
        <div>
            <h5><a href={owner.html_url}>{typeof owner.name === "string" ? `@${owner.name}` : owner.login}</a></h5>
            <h6><a href={html_url}>{name}</a></h6>
            <p>{description}</p>
        </div>
    </StyledCard>;
})

export default Card;



/*
get readme:
/repos/{owner}/{repo}/readme
*/