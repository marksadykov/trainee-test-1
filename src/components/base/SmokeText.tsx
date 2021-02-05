import * as React from "react";
import Style from 'style-it';

export default ({children}) => {

	children = children
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

	if (/18\+/.test(children)) {

		return (
			<Style>
				{`
					.warning:before {
						content: "1";
					}
					.warning:after {
						content: "+";
					}
				 `}
				<span className="warning">8</span>
			</Style>)
	};

	return children;
};
