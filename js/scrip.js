
class nome  {
    constructor() {
        this.id = 1;
        this.arrayNomes = [];
        

    }
    salvar ()   {
       let nome = this.lerDados();
       if(this.validaCampo(nome)){
           this.adicionar(nome);
       }
       this.listaTabela(); 
       this.cancelar();

    }

    listaTabela () {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayNomes.length; i++)
        let tr = tbody.insertRow ();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_endereço = tr.insertCell();
        let td_email = tr.insertCell();
        let td_celular = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();


        td_id.innerText = this.arrayNomes[i].id;
        td_nome.innerText = this.arrayNomes[i].nomeCliente;
        td_valor.innerText = this.arrayNomes[i].valor;
        td_id.innertext = this.arrayNomes[i].id;
        td_id.innertext = this.arrayNomes[i].id;
        td_id.innertext = this.arrayNomes[i].id;
        td_id.innertext = this.arrayNomes[i].id;

        td_id.classlist.add('center');

        let imgEdit = document.createElement('img');
        imgEdit.src ='Imagens/editar.png';

        let imgDelete = document.createElement('img');
        imgDelete.src = 'Imagens/lixeira.png'
        imgDelete.setAttribute("onclick","nome.deletar('+arrayNomes[i].id')");

        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDelete);
    }

    adicionar (nome){
        this.arrayNomes.push(nome);
        this.id ++
    }

    lerDados (){
        let nome = {}
        nome.id = this.id
        nome.nomeCliente = document.getElementById('nome').value;
        nome.valor = document.getElementById('valor').value;
        return nome;
    }

    validaCampo () {
        let msg = '';
        if(nome.nomeCliente == '') {
            msg += '- Informe o nome do cliente! \n';
        }

        if(nome.valor == '') {
            msg += '- Informe o valor do produto! \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

    }

}


var nome = new Nome ();