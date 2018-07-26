import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroupItem from '../components/group_item';

class GroupList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
		}
	}

    render() {
		return (
			<div className='row'>
				{
					this.props.cityState.map( function(meetup) {
						var img = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

						if(meetup.key_photo && meetup.key_photo.photo_link) {
							img = meetup.key_photo.photo_link;
						}

						return(
							<GroupItem
								key={meetup.id}
								name={meetup.name}
								image={img}
								link={meetup.link}
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