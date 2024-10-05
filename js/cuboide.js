const form = document.getElementById('cuboide-calculo');
const valueArea = document.getElementById('value-area');
const valuePerimeter = document.getElementById('value-perimeter');
const valueDiagonal = document.getElementById('value-diagonal');
const valueVolume = document.getElementById('value-volume');
const valueSuperfice = document.getElementById('value-superfice');
const valueLateralSuperfice = document.getElementById('value-lateral-superfice');
const altura = document.getElementById('cuboide-altura-input');
const largura = document.getElementById('cuboide-largura-input');
const comprimento = document.getElementById('cuboide-comprimento-input');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //para n subir infos para o URL
    let comprimentoValue = parseFloat(comprimento.value);
    let larguraValue = parseFloat(largura.value);
    let alturaValue = parseFloat(altura.value);

    // area
    let area = 2 * (comprimentoValue * larguraValue + comprimentoValue * alturaValue + larguraValue * alturaValue);
    valueArea.innerHTML = area;
    
    // diagonal
    let diagonal = Math.sqrt(comprimentoValue**2 + larguraValue**2 + alturaValue**2);
    valueDiagonal.innerHTML = diagonal;
    
    // perimeter
    let perimeter = 4 * (comprimentoValue + larguraValue + alturaValue);
    valuePerimeter.innerHTML = perimeter;
    
    // volume
    let volume = comprimentoValue * larguraValue * alturaValue;
    valueVolume.innerHTML = volume;
    
    // superfice
    let superfice = 2 * (comprimentoValue * larguraValue + comprimentoValue * alturaValue + larguraValue * alturaValue);
    valueSuperfice.innerHTML = superfice;
    
    // lateral superfice
    let lateralSuperfice = 2 * (comprimentoValue * alturaValue + larguraValue * alturaValue);
    valueLateralSuperfice.innerHTML = lateralSuperfice;
});