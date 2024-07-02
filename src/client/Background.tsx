import * as React from 'react';
import Parallax from 'parallax-js';
import { Sky, Star, Stars, SkyContainer, ContainerTop } from '../styles/Components';

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    React.useEffect(() => {
        const scene = document.getElementById('scene');
        let parallax: Parallax;
        if (scene !== null)
            parallax = new Parallax(scene, {
                selector: '.layer'
            });

        return () => { parallax?.destroy() }
    }, []);


    return <div id="scene">
        <Sky>
            <Stars>
                <div className="layer" data-depth="0.3">
                    {(new Array(80)).map(star => <Star key={star} position={{ left: getRandomInt(0, 100), top: getRandomInt(0, 100) }} size={getRandomInt(0, 6)} animationDelay={getRandomInt(0, 5)} />)}
                </div>
            </Stars>
        </Sky>
        <SkyContainer>
            <ContainerTop>
                <div className="layer" data-depth="0.1">
                    {children}
                </div>
            </ContainerTop>
        </SkyContainer>
    </div>
}

// For spreading Stars
function getRandomInt(min: number, max: number) {
    if (min < max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else return Math.ceil(min);
}

export default Background;