import * as React from 'react';
import { } from './BGComps';
import { Chance } from 'chance';

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const C = Chance();

    return <div>
        <div>
            {/* Background */}
        </div>
        <div>
            {children}
        </div>
    </div>
}


export default Background;