import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroupDetail from '../components/group_detail';

class GroupList extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" }

		this.renderMeetup = this.renderMeetup.bind(this);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(name) {
		alert('CLICOU EM ' + name)
	}

    //Função para tratar cada meetup
    renderMeetup(meetup) {
        return (
			<div onClick={ () => this.handleClick(meetup.name) } key={meetup.id}>{meetup.city}, {meetup.id}{meetup.name}</div>
            /*<div key={meetupId}>

				<GroupDetail
					meetupId={meetupId}
					meetupName={meetupName}
					meetupMembers={meetupMembers}
					meetupCity = {meetupCity}
				/>

			</div>
			*/
		);
    }

    render() {
		console.log('Props received: ', this.props)
		//let teste = this.props.cityData.cityState;
        return (
			<div className="row">
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