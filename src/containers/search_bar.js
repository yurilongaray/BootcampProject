import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchEvent} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}

		this.onInputChange 	= this.onInputChange.bind(this);
		this.onFormSubmit 	= this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
        this.setState({
			term: event.target.value
		});
	}

    onFormSubmit(event) {
		//Retira o submit do form
        event.preventDefault();
		this.props.fetchEvent(this.state.term);
		//Quando finalizar, retornar termo vazio
        this.setState({
			term: ''
		});
	}

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className='row form-search'>
                <div className='search-bar input-group'>
                    <input
                        placeholder='Search for a city'
                        className='form-control'
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />

                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchEvent }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);