import * as React from 'react';
import { StyledCard, CardShadow, CardContent, CardName, CardExpansion, CardDescription, CardLabel, CardAttack, CardHealth, CardCost } from '../../styles/Components';
import RepoType from '../../types/Repository';


const range = 40;
const calcValue = (a: number, b: number) => (a / b * range - range / 2).toFixed(1);

const Card: React.FC<RepoType[0]> = React.memo(props => {
    const { name, description, owner, html_url, id } = props;
    const [timeout, setTimeout] = React.useState<number>();

    // hover animation
    const handleMouseMove = React.useCallback(({ x, y }: { x: number, y: number }) => {
        if (timeout)
            window.cancelAnimationFrame(timeout);

        setTimeout(window.requestAnimationFrame(() => {
            const card = document.getElementById(`card_${id}`);
            if (card !== null) {
                const { top, left } = card.getBoundingClientRect();
                const yValue = calcValue(y - top, card.clientHeight);
                const xValue = calcValue(x - left, card.clientWidth);
                card.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg) translateY(-10px) translateZ(60px)`;

                /* Parallax for children, probably for images?:
                const texts = Array.from(card.children);
                [].forEach.call(texts, (text: Element) => {
                    if (text.tagName.toUpperCase() === "DIV")
                        (text as HTMLDivElement).style.transform = `translateX(${-xValue}px) translateY(${-yValue}px)`;
                });
                */
            }
        }));
    }, [id, timeout, setTimeout]);

    // resetter
    const handleMouseLeave = React.useCallback(() => {
        if (timeout)
            window.cancelAnimationFrame(timeout);

        setTimeout(window.requestAnimationFrame(() => {
            const card = document.getElementById(`card_${id}`);
            if (card !== null) {
                card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)`;

                /* Parallax for children, probably for images?:
                const texts = Array.from(card.children);
                [].forEach.call(texts, (text: Element) => {
                    if (text.tagName.toUpperCase() === "DIV")
                        (text as HTMLDivElement).style.transform = `translateX(0px) translateY(0px)`;
                });
                */
            }
        }));
    }, [id, timeout, setTimeout]);

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

    return <CardShadow id={`${id}`}>
        <StyledCard id={`card_${id}`}>
            <CardContent>
                <CardLabel>
                    {/* CARD TYPE??? */}
                    <CardName>
                        <a href={html_url}>{name}</a>
                    </CardName>
                    <CardCost />
                </CardLabel>
                {/* ICON??? */}
                <CardDescription>{description}</CardDescription>
                <CardLabel>
                    <CardAttack />
                    <CardExpansion>
                        <a href={owner.html_url}>{typeof owner.name === "string" ? `@${owner.name}` : `@${owner.login}`}</a>
                    </CardExpansion>
                    <CardHealth />
                </CardLabel>
            </CardContent>
        </StyledCard>
    </CardShadow>;
})

export default Card;



/*
get readme:
/repos/{owner}/{repo}/readme
*/