function selecionar1(seletor) {
    
    const divSelecionadaAntes = document.querySelector('.selecionado1');

    
    if(divSelecionadaAntes !== null){
        divSelecionadaAntes.classList.remove('selecionado1');

    }

    const divpratos = document.querySelector(seletor);
    divpratos.classList.add('selecionado1');

}

function selecionar2(seletor) {
    
    const divSelecionadaAntes = document.querySelector('.selecionado2');
    
    if(divSelecionadaAntes !== null){
        divSelecionadaAntes.classList.remove('selecionado2');
    }

    const divpratos = document.querySelector(seletor);
    divpratos.classList.add('selecionado2');
}

function selecionar3(seletor) {
    
    const divSelecionadaAntes = document.querySelector('.selecionado3');
    
    if(divSelecionadaAntes !== null){
        divSelecionadaAntes.classList.remove('selecionado3');
    }

    const divpratos = document.querySelector(seletor);
    divpratos.classList.add('selecionado3');
}