import * as React from 'react';
import { BGColour, BGOverlay } from '../styles/Components';

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <>
        <BGColour />
        <BGOverlay>
            {children}
        </BGOverlay>
    </>
}

export default Background;