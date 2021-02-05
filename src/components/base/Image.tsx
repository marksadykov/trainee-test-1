import * as React from 'react';
import Style from 'style-it';

export default (props) => {

	return (
		<Style>
			{`
				#imgStyle {
					background-image: url(${props.src});
					width: ${props.width}px;
					height: ${props.height}px;
				}
			`}
			<div id="imgStyle" />
		</Style>)
};
