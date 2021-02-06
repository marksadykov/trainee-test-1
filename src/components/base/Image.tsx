import * as React from 'react';
import Style from 'style-it';

const Image = (props: {src: string, width: string, height: string}): (JSX.Element) => {

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

export default Image;



