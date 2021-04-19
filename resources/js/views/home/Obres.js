import React from 'react';

function Obres({obra, index, toggleObres}) {
	return (
		<div className={"obra " + (obra.open ? 'open' : '')}
		key={index}
		onClick={() => toggleObres(index)}
		>
			<div className="obresTitol">
				{obra.titol}
			</div>
			<div className="obresDescripcio">
				{obra.descripcio}
			</div>
		</div>
    )
}

export default Obres;