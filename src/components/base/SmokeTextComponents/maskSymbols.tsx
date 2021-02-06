import * as React from "react";
import Style from 'style-it';
import splitString from './splitString';

const maskSymbols = (toMask: string): (JSX.Element) => {

    const [before, mid, after] = splitString(toMask);

    return (
        <Style>
            {`
				.warning:before {
					content: "${before}";
				}
				.warning:after {
					content: "${after}";
				}
			`}
            <span className="warning">{mid}</span>
        </Style>)
}

export default maskSymbols;
