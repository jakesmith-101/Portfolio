import * as React from 'react';
import Parallax from 'parallax-js';
import { Sky, Star, Stars } from './BGComps';

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

    // dynamically change data-depth value according to size of div?
    return <div id="scene">
        <Sky>
            <StarGenerator count={80} />
            <div className="layer" data-depth="0">
                {children}
            </div>
        </Sky>
    </div>
}

const StarGenerator: React.FC<{ count: number }> = ({ count }) => {
    return <Stars className="layer" data-depth="0.3">
        {[...new Array(count)].map((_, id) => <Star key={id} pos={{ top: getRandomInt(0, 100), left: getRandomInt(0, 100) }} size={getRandomInt(0, 6)} delay={getRandomInt(0, 5)} />)}
    </Stars>
}

function getRandomInt(min: number, max: number) {
    if (min < max)
        return min + Math.floor(Math.random() * (max - min + 1));
    else
        return min;
}

export default Background;