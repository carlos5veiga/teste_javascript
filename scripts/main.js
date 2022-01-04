let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
	let meuSrc = minhaImagem.getAttribute('src');
	if(meuSrc === 'imagens/dog1.jpg'){
		minhaImagem.setAttribute('src', 'imagens/dog2.jpg');
	} else {
		minhaImagem.setAttribute('src', 'imagens/dog1.jpg');
	}
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
	let meuNome = prompt('Por favor, digite seu nome.');
	if(!meuNome || meuNome === null){
		defineNomeUsuario();
	} else {
		localStorage.setItem('nome', meuNome);
		meuCabecalho.textContent = 'Olá, ' + meuNome;
	}
}

if(!localStorage.getItem('nome')){
	defineNomeUsuario();
} else {
	let nomeGuardado = localStorage.getItem('nome');
	meuCabecalho.textContent = 'Olá, ' + nomeGuardado;
}

meuBotao.onclick = function(){defineNomeUsuario();}
