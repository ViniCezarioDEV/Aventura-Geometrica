const form = document.getElementById('romboedro-calculo');
const valueArea = document.getElementById('value-area');
const valuePerimeter = document.getElementById('value-perimeter');
const valueVolume = document.getElementById('value-volume');
const altura = document.getElementById('romboedro-altura-input');
const largura = document.getElementById('romboedro-largura-input');
const comprimento = document.getElementById('romboedro-comprimento-input');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //para n subir infos para o URL
    //area
    let area = comprimento.value * largura.value * altura.value;
    valueArea.innerHTML = area;
    //perimeter
    let perimeter = 4 * (comprimento.value + altura.value + largura.value);
    valuePerimeter.innerHTML = perimeter;
    //volume
    let volume = comprimento.value * largura.value * altura.value;
    valueVolume.innerHTML = volume;
});