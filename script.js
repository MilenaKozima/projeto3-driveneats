let prato = '';
let bebida = '';
let sobremesa = '';

function VerificarSelacao(){
    if (prato !== ''){
        if (bebida !== ''){
            if(sobremesa !== ''){
                const elipse = document.querySelector('.elipse');
                elipse.innerHTML = "Fechar pedido";
                elipse.classList.add('continua');
                elipse.removeAttribute('disabled');
            }
        }
    }
}

function apertoubotao(){
    const mes = prato + bebida + sobremesa;
    const codURL = fixedEncodeURIComponent(mes);
    const URL =  "https://wa.me/5544984296962?"+codURL;
    const teste = document.querySelector('.localizar');
    teste.setAttribute("href", URL);
}

function selecionar1(seletor) {
    
    prato = seletor.innerHTML;
    
    const divSelecionadaAntes = document.querySelector('.selecionado1');

    
    if(divSelecionadaAntes !== null){
        divSelecionadaAntes.classList.remove('selecionado1');

    }

    seletor.classList.add('selecionado1');
    VerificarSelacao();
}

function selecionar2(seletor) {
    
    bebida = seletor.innerHTML;

    const divSelecionadaAntes = document.querySelector('.selecionado2');
    
    if(divSelecionadaAntes !== null){
        divSelecionadaAntes.classList.remove('selecionado2');
    }

    seletor.classList.add('selecionado2');
    VerificarSelacao();
}

function selecionar3(seletor) {

    sobremesa = seletor.innerHTML;
    
    const divSelecionadaAntes = document.querySelector('.selecionado3');
    
    if(divSelecionadaAntes !== null){
        divSelecionadaAntes.classList.remove('selecionado3');
    }

    seletor.classList.add('selecionado3');
    VerificarSelacao();
}

function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }


