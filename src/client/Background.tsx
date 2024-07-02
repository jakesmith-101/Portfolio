import * as React from 'react';
import Parallax from 'parallax-js';
import { Sky, Star, Stars } from '../styles/Components';

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
            <Stars data-depth="0.3">
                {new Array(80).map(star => <Star key={star} />)}
            </Stars>
        </Sky>
        <div className="layer">
            {children}
        </div>
    </div>
}

export default Background;