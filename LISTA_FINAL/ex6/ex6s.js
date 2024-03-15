function prod(){
    var prod = prompt('Informe o nome do produto: ')
    var preco = parseFloat(prompt('Informe o valor do produto: '))
    var dinh = parseFloat(prompt('Informe o valor recebido: '))
    produto.innerHTML = prod
    valor.innerHTML = preco 
    deu.innerHTML = dinh
    troco.innerHTML = dinh - preco

    if (dinh < preco){
        insu.innerHTML = "Compra cancelada. Dinheiro insuficiente!"

    divHidden.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    }

    
}