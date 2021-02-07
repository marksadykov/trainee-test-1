import * as React from "react";
import splitString from './splitString';
import makeClassName from './makeClassName';

const maskSymbols = (toMask: string): (JSX.Element) => {

    const [before, mid, after] = splitString(toMask);

    const currentClass = makeClassName(20);

    return (
        <span className={currentClass}>{mid}
            <style>{`
						.${currentClass}:before {
                            content: "${before}";
                        }
                        .${currentClass}:after {
                            content: "${after}";
                        }
        			`}
            </style>
        </span>
    )
}

export default maskSymbols;
