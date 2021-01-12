
function toggleMenu() {

	const menuEfeito =  document.querySelector('.fundo-menu');  // função que altera as imagens do burguer abrir e fechar
	const sidebar =  document.querySelector('.sidebar');  // função que entre o menu e os textos
	menuEfeito.classList.toggle('active') // função que altera as imagens do burguer abrir e fechar
	sidebar.classList.toggle('active') // função que entre o menu e os textos
}