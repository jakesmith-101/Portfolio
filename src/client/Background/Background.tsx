import * as React from 'react';
import { BGColour, Container, FirstStarCurtain, SecondStarCurtain, ThirdStartCurtain } from './BGComps';

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
    let value = `${random(2000)}px ${random(2000)}px #FFF`;
    for (let i = 2; i < n; i++) {
        value = `${value} , ${random(2000)}px ${random(2000)}px #FFF`;
    }
    return value;
}

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <BGColour>
        <FirstStarCurtain stars={StarBuilder(700)} />
        <SecondStarCurtain stars={StarBuilder(200)} />
        <ThirdStartCurtain stars={StarBuilder(100)} />
        <Container>
            {children}
        </Container>
    </BGColour>
}


export default Background;