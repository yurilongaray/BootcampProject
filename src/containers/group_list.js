import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroupDetail from '../components/group_detail';

class GroupList extends Component {
	constructor(props) {
		super(props);

	}

    //Função para tratar cada meetup
    renderMeetups(cityData) {
		//console.log(cityData)
		const meetupCity = cityData.list.map(meetupEvent => meetupEvent.city);
		const meetupId  = cityData.list.map(meetupEvent => meetupEvent.id);
		const meetupName  = cityData.list.map(meetupEvent => meetupEvent.name);
		const meetupMembers  = cityData.list.map(meetupEvent => meetupEvent.members);

        return (
            <div key={meetupId}>
				<GroupDetail
					meetupId={meetupId}
					meetupName={meetupName}
					meetupMembers={meetupMembers}
					meetupCity = {meetupCity}
				/>
            </div>
        );
    }

    render() {
		console.log('Props received: ', this.props)
		//{this.props.meetupEvent.map(this.renderMeetups)}
        return (
			<div className="row">
			</div>
        );
    }
}

const mapStateToProps = store => ({
	cityData: store.cityState
});

export default connect(mapStateToProps)(GroupList);