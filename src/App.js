import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import SearchBar from './containers/search_bar';

//https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf

class App extends Component {
	render() {
		return (
			<div className="App" style={{ paddingTop: '10px' }}>
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
	bindActionCreators({  }, dispatch);

//Para fazer a conexão com a Store e
//Por fim, passamos o método mapDispatchToProps como segundo parâmetro do método connect.
export default connect(mapStateToProps, mapDispatchToProps)(App);


