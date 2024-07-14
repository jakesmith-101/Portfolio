import * as React from 'react';
import { StyledCard } from '../../styles/Components';
import RepoType from '../../types/Repository';
import { calcValue } from '../Parallax/Functions';

const Card: React.FC<RepoType[0]> = React.memo(props => {
    const { name, description, owner, html_url, id } = props;
    const [timeout, setTimeout] = React.useState<number>();

    const handleAnimation = React.useCallback((xValue: string, yValue: string) => {
        if (timeout)
            window.cancelAnimationFrame(timeout);

        setTimeout(window.requestAnimationFrame(() => {
            const card = document.getElementById(`${id}`);
            if (card !== null) {
                card.style.transform = `rotateX(${yValue}deg) rotateY(${-xValue}deg)`;

                /* Parallax for children:
                const texts = Array.from(card.children);
                [].forEach.call(texts, (text: Element) => {
                    if (text.tagName.toUpperCase() === "DIV")
                        (text as HTMLDivElement).style.transform = `translateX(${xValue}px) translateY(${yValue}px)`;
                });
                */
            }
        }));
    }, [id, timeout, setTimeout]);

    // hover animation
    const handleMouseMove = React.useCallback(({ x, y }: { x: number, y: number }) => {
        const card = document.getElementById(`${id}`);
        if (card !== null) {
            const { top, left } = card.getBoundingClientRect();
            const yValue = calcValue(y - top, card.clientHeight);
            const xValue = calcValue(x - left, card.clientWidth);
            handleAnimation(xValue, yValue);
        }
    }, [id, handleAnimation]);

    // resetter
    const handleMouseLeave = React.useCallback(() => handleAnimation("0", "0"), [handleAnimation]);

    React.useEffect(() => {
        const card = document.getElementById(`${id}`);
        if (card !== null) {
            card.addEventListener('mousemove', handleMouseMove, false);
            card.addEventListener('mouseleave', handleMouseLeave, false);
        }

        // cleanup this component
        return () => {
            if (card !== null) {
                card.removeEventListener('mousemove', handleMouseMove, false);
                card.removeEventListener('mouseleave', handleMouseLeave, false);
            }
        };
    }, [id]);

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