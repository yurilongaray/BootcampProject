import React, {Component} from 'react';


class EventDetail extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		//console.log(props);
		return (
			<div className="col-md-4 meetup-box">
				<h2>{this.props.meetupName}</h2>
			</div>
		);

	}
	/*<div class="col-md-4 curso-box">
		<h4>@curso.Nome</h4>
		<img class = "imagem-curso" src="@curso.CaminhoImagem"/>
		<div class="col-md-12 botoes-cursos">
			<a href="/curso/detalhe/@curso.Id"><button type="button" class="btn btn-light">Detalhes</button></a>
			<a href="/curso/inscrever/@curso.Id"><button type="button" class="btn btn-info">Inscrição</button></a>
		</div>
	</div>
	*/
}
export default EventDetail;