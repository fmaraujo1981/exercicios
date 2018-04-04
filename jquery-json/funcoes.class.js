// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarValores = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('CTB05.json', function(data){
			this.qtd = data.nodes.length;
			this.retorno = '';

			for (i = 0; i < this.qtd; i++){
				this.retorno += 'Ano: ' + data.nodes[i].node['Ano'] ;
				this.retorno += 'UF: ' + data.nodes[i].node['UF'] + ' - ';
				this.retorno += 'Vinculos: ' + data.nodes[i].node['Vinculos'] + '<br />';
			}

			$('#resultado').html(this.retorno);
		});

	}

}

// Objeto.
var obj = new json();
obj.resgatarValores();
