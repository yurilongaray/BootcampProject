/*				<GroupDetailModal show={this.state.show} handleClose={this.hideModal}>
					<h2>{ meetup.name }</h2>
					<ul className='list-group'>
						<li className='list-group-item'></li>
						<li className='list-group-item'></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</GroupDetailModal>

					handleClick(name) {

		console.log(this.state);
	}

	this.state = {
		term: '',
		show: false
	}

	this.renderMeetup = this.renderMeetup.bind(this);
	this.handleClick = this.handleClick.bind(this);
	}
	showModal = () => {
		console.log('open', this.state)
		this.setState({ show: true })
	}

	hideModal = () => {
		console.log('close', this.state)
		this.setState( { show: false })
	}

    //Função para tratar cada meetup
    renderMeetup(meetup) {
        return (
			<div className='col-md-6 meetup-box' key={meetup.id}>

				<div className='row'>
					<h4>{meetup.name}</h4>
				</div>
				<div className='row'>
					{ //Verifica se existe foto nos eventos.
						meetup.key_photo && meetup.key_photo.photo_link
							? <img className='img-responsive img-thumbnail' src={ meetup.key_photo.photo_link } alt='Meetup Group' />
							: <img className='img-responsive img-thumbnail' src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' alt='Empty'/>
					}
				</div>
				<div className='row'>
					<button type='button' onClick={this.showModal} className='btn btn-light'>Detalhes</button>
					<a href={meetup.link}><button type='button' className='btn btn-info'>Inscrição</button></a>
				</div>
			</div>
		);
	}
	*/