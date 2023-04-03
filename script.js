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
                apertoubotao();
            }
        }
    }
}

function apertoubotao(){
                const nome1 = prato.querySelector('p:nth-child(1)').innerText;
                const preco1 = number(prato.querySelector('p:nth-child(3)').innerText);
                const nome2 = bebida.querySelector('p:nth-child(1)').innerText;
                const preco2 = number(bebida.querySelector('p:nth-child(3)').innerText);
                const nome3 = sobremesa.querySelector('p:nth-child(1)').innerText;
                const preco3 = number(sobremesa.querySelector('p:nth-child(3)').innerText);
                const total = preco1+preco2+preco3;
                const mens = "Seu pedido:"+nome1+nome2+nome3+total;
                const codURL = fixedEncodeURIComponent(mens);
                const URL =  "https://wa.me/5544984296962?text="+codURL;
                const teste = document.querySelector('.localizar');
                teste.setAttribute("href", 'URL');
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


