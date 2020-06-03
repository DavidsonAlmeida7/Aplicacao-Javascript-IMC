const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const result = document.getElementById('result');
const result1 = document.getElementById('result_1');
const result2 = document.getElementById('result_2');
const result3 = document.getElementById('result_3');
const result4 = document.getElementById('result_4');
const result5 = document.getElementById('result_5');

function calcImc() {

    if (altura.value == '' || peso.value == '') {
        result.innerHTML = '<div class="alert alert-danger" role="alert">Operação inválida ou campo vazio!</div>';
    } else {
        //IMC = WEIGHT / (HEIGHT * HEIGHT)
        //IMC = PESO / (ALTURA * ALTURA)
        const IMC = peso.value.replace(',', '.') / (altura.value.replace(',', '.') * altura.value.replace(',', '.'));
        
        if (IMC < 18) {
            result.innerHTML = `<div class="alert alert-warning" role="alert">Resultado IMC: ${IMC.toFixed(4).replace('.', ',')}!</div>`;
            result1.style.background = '#fff3cd';
        } else if (IMC > 18 && IMC < 25) {
            result.innerHTML = `<div class="alert alert-warning" role="alert">Resultado IMC: ${IMC.toFixed(4).replace('.', ',')}!</div>`;
            result2.style.background = '#fff3cd';
        } else if (IMC > 25 && IMC < 30) {
            result.innerHTML = `<div class="alert alert-warning" role="alert">Resultado IMC: ${IMC.toFixed(4).replace('.', ',')}!</div>`;
            result3.style.background = '#fff3cd';
        } else if (IMC > 30 && IMC < 40) {
            result.innerHTML = `<div class="alert alert-warning" role="alert">Resultado IMC: ${IMC.toFixed(4).replace('.', ',')}!</div>`;
            result4.style.background = '#fff3cd';
        } else if (IMC > 40) {
            result.innerHTML = `<div class="alert alert-warning" role="alert">Resultado IMC: ${IMC.toFixed(4).replace('.', ',')}!</div>`;
            result5.style.background = '#fff3cd';
        }
    }
}

function limparImc() {
    peso.value = '';
    altura.value = '';
    result.innerHTML = '';
    result1.style.background = '';
    result2.style.background = '';
    result3.style.background = '';
    result4.style.background = '';
    result5.style.background = '';
}

function ano() {
    var data = document.getElementById('date');
    var today = new Date();
    var year = today.getFullYear();
    data.innerHTML = year;
}

function horas() {
    // Função para formatar 1 em 01, slice(-2) -> extrai os dois últimos elementos da sequência.
	const formataNum = n => {
		return ('0' + n).slice(-2);
	}
    // Cria intervalo
	const interval = setInterval(() => {
		const date = new Date();
		//Formata a data conforme dd/mm/aaaa hh:ii:ss
		const dataHora = formataNum(date.getUTCDate()) + '/' + formataNum((date.getMonth() + 1)) + '/' + date.getFullYear() + ' ' + formataNum(date.getHours()) + ':' + formataNum(date.getMinutes()) + ':' + formataNum(date.getSeconds());
		document.getElementById('horas').innerHTML = dataHora;
	}, 1000);
}

/************* FUNÇÕES PARA MASCARAR O INPUT ALTURA E PESO E VALIDAR O MAXIMO DE CARACTERES DIGITADOS **********/

function mascara(objeto, funcao){
    valor_obj = objeto;
    valor_fun = funcao;
    setTimeout("execmascara()", 1);
}

function execmascara(){
    valor_obj.value = valor_fun(valor_obj.value);
}

function mascaraInputAltura(){
    var altura_valor = altura.value;
    var masc_altura = altura_valor.replace(/\D/g,"");
    masc_altura = masc_altura.replace(/(\d{1})(\d)/,"$1,$2");

    return masc_altura;
}

function maxCaracteresAltura() {
    return altura.setAttribute('maxLength', '4');
}

function mascaraInputPeso(){
    var peso_valor = peso.value;
    var masc_peso = peso_valor.replace(/\D/g,"");
    masc_peso = masc_peso.replace(/^(\d+)(\d{2})$/, '$1,$2');

    return masc_peso;
}

function maxCaracteresPeso() {
    return peso.setAttribute('maxLength', '6');
}

/*************************************** FUNÇÕES PARA SER INVOCADAS NA PAGINA HTML **************************/

ano();
horas();
maxCaracteresAltura();
maxCaracteresPeso();