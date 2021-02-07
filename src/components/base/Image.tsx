import * as React from 'react';
import makeClassName from './utils/makeClassName'

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



