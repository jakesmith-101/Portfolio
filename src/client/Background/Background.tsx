import * as React from 'react';
import { Lamp, Region, Glass, Bubble, tAnim } from './BGComps';
import { Chance } from 'chance';
const C = Chance();

const animTypes: tAnim[] = ["linear", "ease-in", "ease-out", "ease-in-out"];
const Background: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    // dynamically change data-depth value according to size of div?
    return <Region>
        <Lamp>
            <Glass>
                { // this is quite intensive to render btw
                    [...new Array(5)].map((_, id) => <Bubble
                        key={id}
                        first={C.pickone(animTypes)}
                        t1={C.integer({ min: 15, max: 60 })}
                        second={C.pickone(animTypes)}
                        t2={C.integer({ min: 15, max: 60 })}
                        third={C.pickone(animTypes)}
                        t3={C.integer({ min: 15, max: 60 })}
                        fourth={C.pickone(animTypes)}
                        t4={C.integer({ min: 15, max: 60 })}
                    />)}
            </Glass>
        </Lamp>
        <div>
            {children}
        </div>
    </Region>
}


export default Background;