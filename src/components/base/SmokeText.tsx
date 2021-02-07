import * as React from "react";
import clearSymbols from './utils/clearSymbols';
import maskSymbols from './utils/maskSymbols';

const SmokeText: ({children}: { children: any }) => (JSX.Element) = ({children}) => {

	children = clearSymbols(children);

	if (/18\+/.test(children)) {
		return maskSymbols(children);
	}

	return children;
};

export default SmokeText;
