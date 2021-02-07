import * as React from 'react';
import makeClassName from './utils/makeClassName'

/**
 * return element containing image in a div tag, protected from XPath
 * @param   {string} props.src     base64 of image
 * @param   {string} props.width   width of image
 * @param   {string} props.height  height of image
 * @return  {JSX.Element}          image in div tag
 */
const Image = (props: {src: string, width: string, height: string}): (JSX.Element) => {

	const currentClass = makeClassName(20);

	return (
		<div className={currentClass}>
			<style>{`
						.${currentClass}{
							background-image: url(${props.src});
							width: ${props.width}px;
							height: ${props.height}px;
						}
        			`}
      		</style>
		</div>
	)
};

export default Image;



