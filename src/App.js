import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';
import SearchBar from './containers/search_bar';

//https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf

class App extends Component {
	state = {
	  inputValue: ''
	}
	inputChange = event => {
	  this.setState({
		inputValue: event.target.value
	  })
	}
	render() {
	  const {
		clickButton,
		newValue
	  } = this.props;
	  const { inputValue } = this.state;
	  return (
		<div className="App" style={{ paddingTop: '10px' }}>
		  <input
			onChange={this.inputChange}
			type='text'
			value={inputValue}
		  />
		  <button onClick={() => clickButton(inputValue)}>
			Click me!
		  </button>
		  <h1>{newValue}</h1>

		  <SearchBar />

		</div>
	  );
	}
  }
//O método mapStateToProps transforma um trecho do estado da
//Store em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
	newValue: store.clickState.newValue
});

//converter a Action Creator clickButton que criamos no arquivo src/actions/index.js
//em uma prop para o componente. O método bindActionCreators nos auxilia neste trabalho.
//Ao clicar no botão Click me!, o valor do state inputValue que foi alterado pelo input
//text é enviado à Store pelo método clickButton, que foi mapeado no componente como prop.

const mapDispatchToProps = dispatch =>
	bindActionCreators({ clickButton }, dispatch);

//Para fazer a conexão com a Store e
//Por fim, passamos o método mapDispatchToProps como segundo parâmetro do método connect.
export default connect(mapStateToProps, mapDispatchToProps)(App);


