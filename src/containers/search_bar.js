import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchEvent} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "Curitiba" }

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) { //Toda classe DOM necessita do parâmetro event
        //console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault(); //Faz com que o browser não submita o form
        this.props.fetchEvent(this.state.term); //Chamando a ActionCreator e passando o term para cidade
        this.setState({ term: '' }); //Quando finalizar, retornar termo vazio

    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                    placeholder='Search for an group'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />

                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchEvent }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

/*
Importante:
Se existir um callback (onChange), que faz referência a uma função (onInputChange)
essa função necessita ser bindada ( this.onInputChange = this.onInputChange.bind(this); )
para então se utilizar a funcionalidade this
*/