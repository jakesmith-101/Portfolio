import * as React from 'react';
import { keyframes, styled } from 'styled-components';
import Parallax from 'parallax-js';

const Background: React.FC<{}> = _ => {
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
    </div>
}

const twinkle = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
`;

const Sky = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #c5cfb7; // Old browsers
    @include filter-gradient(#c5cfb7, #082d47, horizontal); // IE6-9 fallback on horizontal gradient
    @include background-image(radial-gradient(center, ellipse cover, #c5cfb7 0%, #84ad98 20%, #5f9986 39%, #5f9986 50%, #5f9986 60%, #4a8974 72%, #326565 84%, #082d47 100%));
`;
const Star = styled.div``;
const Stars = styled.div`
    top: 0;
    left: 0;
    right: 0;
    height: 80%;
    z-index: -1;

    &>* {
        position: absolute;
        background: rgba(241, 241, 241, 1);
        @include border-radius(50px);
        animation: ${twinkle} 2s infinite;
        transition-timing-function: ease-in-out;
    }

    @for $i from 1 through (20) {
        $top: random(100);
        $left: random(100);
        $size: random(6)+0px;

        ${Star}:nth-of-type(#{$i}) {
            position: relative;
            top: $top * 1%;
            left: $left * 1%;
            width: $size;
            height: $size;
            animation-delay: random(5) + s;
        }
    }

    @for $i from 21 through (40) {
        $top: random(100);
        $left: random(100);
        $size: random(6)+0px;

        ${Star}:nth-of-type(#{$i}) {
            position: relative;
            top: $top * 1%;
            left: $left * 1%;
            width: $size;
            height: $size;
            animation-delay: random(5) + s;
        }
    }
`;


export default Background;