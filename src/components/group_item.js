import React, {Component} from 'react';
import ModalMeetup from './modal_meetup';

class GroupItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			show: false
		}
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	showModal = () => {
		this.setState({show: true})
	}

	hideModal = () => {
		this.setState({show: false})
	}

	render() {
		return (
			<div className='col-md-6 meetup-box'>
				<div className='row'>
					<h4>{this.props.name}</h4>
				</div>
				<div className='row'>
					<img className='img-responsive img-thumbnail' src={this.props.image} alt='Meetup Group' />
				</div>
				<div className='row'>
					<button type='button' onClick={this.showModal} className='btn btn-light'>
						Detalhes
					</button>
					<a href={this.props.link}>
						<button type='button' className='btn btn-info'>
							Inscrição
						</button>
					</a>
				</div>
				<ModalMeetup
					show={this.state.show}
					handleClose={this.hideModal}
					title={this.props.name}
					dateNextEvent={this.props.dateNextEvent}
					organizer={this.props.organizer}
				/>
			</div>
		);
	}
}
export default GroupItem;