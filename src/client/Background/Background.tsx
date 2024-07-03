import * as React from 'react';

const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    // dynamically change data-depth value according to size of div?
    return <div>
        {children}
    </div>
}


export default Background;