function visorValor(valor){
    let visor = document.getElementById('display');   

    if(visor.innerText === '0'){
        visor.innerText = "";
        visor.innerText += valor;
    }
}