import * as React from "react";
import clearSymbols from './SmokeTextComponents/clearSymbols';
import maskSymbols from './SmokeTextComponents/maskSymbols';

const SmokeText: ({children}: { children: any }) => (JSX.Element) = ({children}) => {

	children = clearSymbols(children);

	if (/18\+/.test(children)) {
		return maskSymbols(children);
	}

	return children;
};

export default SmokeText;
