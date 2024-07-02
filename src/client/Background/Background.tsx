import * as React from 'react';
import Parallax from 'parallax-js';
import './bg.scss';

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
        <div className="sky">
            <div className="stars layer" data-depth="0.3">
                <Stars count={80} />
            </div>
        </div>
        <div className="container">
            <div className="top" data-depth="0.1">
                {children}
            </div>
        </div>
    </div>
}

const Stars: React.FC<{ count: number }> = ({ count }) => {
    return <>
        {(new Array(count)).map(star => <div key={star} className="star"></div>)}
    </>
}

export default Background;