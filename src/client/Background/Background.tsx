import * as React from 'react';
import { BGColour, StarCurtain } from './BGComps';

const random = (max: number, min?: number) => {
    min = min ?? 0;
    if (min < max)
        return min + Math.floor(Math.random() * (max - min + 1));
    else if (max < min)
        return max + Math.floor(Math.random() * (min - max + 1)); // swap max/min
    else
        return min;
}

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const StarBuilder = React.useCallback((n: number) => {
        const container = document.getElementById("children");
        const width = container?.clientWidth ?? 2000;
        const height = container?.clientHeight ?? 2000;

        let value = `${random(100) * width / 100}px ${random(100) * height / 100}px #FFF`;
        for (let i = 1; i < n; i++) {
            value = `${value} , ${random(100) * width / 100}px ${random(100) * height / 100}px #FFF`;
        }
        return value;
    }, [document.getElementById]);

    return <BGColour>
        <StarCurtain stars={StarBuilder(700)} size={1} />
        <StarCurtain stars={StarBuilder(200)} size={2} />
        <StarCurtain stars={StarBuilder(100)} size={3} />
        <div id="children">
            {children}
        </div>
    </BGColour>
}


export default Background;