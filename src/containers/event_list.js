import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventDetail from '../components/event';

class EventList extends Component {

    //Função para tratar cada meetup
    renderMeetups(cityData) {
		console.log(cityData)
		const meetupCity = cityData.list.map(meetupEvent => meetupEvent.city);
		const meetupId  = cityData.list.map(meetupEvent => meetupEvent.id);
		const meetupName  = cityData.list.map(meetupEvent => meetupEvent.name);
		const meetupMembers  = cityData.list.map(meetupEvent => meetupEvent.members);

        return (
            <div key={meetupId}>
                <EventDetail meetupId={meetupId} meetupName={meetupName} meetupMembers={meetupMembers}/>
            </div>
        );
    }

    render() {
		console.log(this.props)
		//{this.props.meetupEvent.map(this.renderMeetups)}
        return (
			<div className="row">
			</div>
        );
    }
}

function mapStateToProps({meetupEvent}) { //{weather} é a mesma coisa que state.weather
    return { meetupEvent }; //{weather} === {weather: weather};
}

export default connect(mapStateToProps)(EventList);