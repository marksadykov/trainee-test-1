import * as React from "react";
import Style from 'style-it';

const clearSymbols = (needClean: string): string =>  {

	return needClean
		.replace(/о/g, 'o')
		.replace(/О/g, 'O')
		.replace(/с/g, 'c')
		.replace(/С/g, 'C')
		.replace(/а/g, 'a')
		.replace(/А/g, 'A')
		.replace(/М/g, 'M')
		.replace(/К/g, 'K')
		.replace(/&laquo;/g, '\u00AB')
		.replace(/&raquo;/g, '\u00BB');
}

const splitString = (toSplit: string): (string[]) => {

	const midIndex = Math.floor(toSplit.length / 2);
	let mid = toSplit[midIndex];
	const before = toSplit.substr(0, midIndex);
	const after = toSplit.substr(midIndex + 1);

	mid = (typeof mid === 'undefined') ? '': mid;

	return [before, mid, after];
}

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

const SmokeText: ({children}: { children: any }) => (JSX.Element) = ({children}) => {

	children = clearSymbols(children);

	if (/18\+/.test(children)) {
		return maskSymbols(children);
	}

	return children;
};

export default SmokeText;
