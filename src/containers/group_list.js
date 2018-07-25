import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroupDetailModal from '../components/group_detail';

class GroupList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			show: false
		}

		this.renderMeetup = this.renderMeetup.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(name) {

		console.log(this.state);
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
				<GroupDetailModal show={this.state.show} handleClose={this.hideModal}>
					<p>teste</p>
				</GroupDetailModal>
			</div>
		);
    }

    render() {
		console.log('Props received: ', this.props)
		return (
			<div className='row'>
				{ this.props.cityState.map(this.renderMeetup) }
			</div>
        );
    }
}

GroupList.defaultProps = {
	cityState: []
}

//Passando o state cityState presente na store
const mapStateToProps = store => ({
	cityState: store.cityState.cityState
});

export default connect(mapStateToProps)(GroupList);