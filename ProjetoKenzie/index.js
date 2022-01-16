//Para armazenar valores
const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
};


//Para capturar valores

//---------------------------Orcamento-------------------------
const campoEntradaOrcamento = document.querySelector('.formularioEntradaOrcamento input'); 
const buttonOrcamento = document.querySelector('.formularioEntradaOrcamento button');

buttonOrcamento.addEventListener('click', capturarValorOrcamento);

function capturarValorOrcamento() {
    const valorOrcamento = Number(campoEntradaOrcamento.value);
    
    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;  
    atualizarInterface();
}

//---------------------------Despesa------------------------------------
const campoNomeDespesa = document.querySelector('.formularioEntradaDespesa_nome');
const campoValorDespesa = document.querySelector('.formularioEntradaDespesa_valor');
const buttonDespesa = document.querySelector('.formularioEntradaDespesa button');

buttonDespesa.addEventListener('click', capturarValoresDespesa);

function capturarValoresDespesa() {
    const nomeDespesa = campoNomeDespesa.value;
    const valorDespesa = Number(campoValorDespesa.value);

    controleGastos.despesas += valorDespesa;
    controleGastos.saldo -= valorDespesa;

    atualizarInterface();
    adicionarDespesasInterface(nomeDespesa, valorDespesa);
}


//Para atualizar a interface

const orcamento = document.querySelector('.secaoImpressaoResultados_orcamento p');
const despesas = document.querySelector('.secaoImpressaoResultados_despesas p');
const saldo = document.querySelector('.secaoImpressaoResultados_saldo p');

function atualizarInterface() {
    // innerText - atualizar 
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`; //interpolação de string. A crase é usada para facilitar a concatenação
    despesas.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
}

const listaDespesas = document.querySelector('.containerDespesas_lista');

//Atualização e remoção de despezas

function adicionarDespesasInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;

    img.src = 'lixeira.png';
    img.alt = 'Icone lixeira';
    img.addEventListener('click', removerDespesa);

    li.dataset.valor = valorDespesa;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);

    listaDespesas.appendChild(li);
}

function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode;
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);

    controleGastos.despesas -= valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada;

    atualizarInterface();
    despesaClicada.remove();
}



