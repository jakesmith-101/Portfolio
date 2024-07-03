import * as React from 'react';
import { Lamp, Region, Glass, Bubble } from './BGComps';

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    // dynamically change data-depth value according to size of div?
    return <Region>
        <Lamp>
            <Glass>
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
                <Bubble />
            </Glass>
        </Lamp>
        <div>
            {children}
        </div>
    </Region>
}


export default Background;