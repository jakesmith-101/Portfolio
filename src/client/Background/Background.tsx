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
const StarBuilder = (n: number) => {
    let value = `${random(100)}% ${random(100)}% #FFF`;
    for (let i = 2; i < n; i++) {
        value = `${value} , ${random(100)}% ${random(100)}% #FFF`;
    }
    return value;
}

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <BGColour>
        <StarCurtain stars={StarBuilder(700)} size={1} />
        <StarCurtain stars={StarBuilder(200)} size={2} />
        <StarCurtain stars={StarBuilder(100)} size={3} />
        <div>
            {children}
        </div>
    </BGColour>
}


export default Background;