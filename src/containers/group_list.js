import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroupItem from '../components/group_item';

class GroupList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
		}
		this.convDate = this.convDate.bind(this);
	}

	convDate(dateUnixTimestamp){
		// Convert timestamp to milliseconds
		var date 		= new Date(dateUnixTimestamp*1000);
		var months_arr 	= ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year 		= date.getFullYear();
		var month 		= months_arr[date.getMonth()];
		var day 		= date.getDate();
		var hours 		= date.getHours();
		var minutes 	= "0" + date.getMinutes();
		//var seconds = "0" + date.getSeconds();

		// Display date time in MM-dd-yyyy h:m:s format
		var convdataTime = month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2);

		return convdataTime;
	}

    render() {
		return (
			<div className='row'>
				{
					this.props.cityState.map((meetup) => {
						const img = meetup.key_photo && meetup.key_photo.photo_link
							? meetup.key_photo.photo_link
							: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

						const date = meetup.next_event && meetup.next_event.time
							? new Date(meetup.next_event.time).toLocaleString()
							: 'Unschedule';

						return(
							<GroupItem
								key={meetup.id}
								name={meetup.name}
								image={img}
								link={meetup.link}
								dateNextEvent={date}
								organizer={meetup.organizer.name}
							/>
						)
					})
				}
			</div>
        );
    }
}

//Iniciando a props com []
GroupList.defaultProps = {
	cityState: []
}

//Passando o state cityState presente na store
const mapStateToProps = store => ({
	cityState: store.cityState.cityState
});
export default connect(mapStateToProps)(GroupList);