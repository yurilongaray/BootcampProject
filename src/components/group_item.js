import React from 'react';

const GroupItem = ({ name, image, link }) => {

	if(!name) {
		return <div>Carregando..</div>
	}


	console.log(name);

	return (

		<div className='col-md-6 meetup-box'>
				<div className='row'>
					<h4>{name}</h4>
				</div>
				<div className='row'>
					<img className='img-responsive img-thumbnail' src={ image } alt='Meetup Group' />
				</div>
				<div className='row'>
					<button type='button' className='btn btn-light'>Detalhes</button>
					<a href={link}><button type='button' className='btn btn-info'>Inscrição</button></a>
				</div>
			</div>

	);
}

export default GroupItem;