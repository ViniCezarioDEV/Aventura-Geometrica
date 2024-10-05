const form = document.getElementById('retangulo-calculo');
const valueArea = document.getElementById('value-area');
const valuePerimeter = document.getElementById('value-perimeter');
const valueDiagonal = document.getElementById('value-diagonal');
const altura = document.getElementById('retangulo-altura-input');
const base = document.getElementById('retangulo-base-input');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //para n subir infos para o URL
    //area
    let area = altura.value * base.value;
    valueArea.innerHTML = area;
    //perimeter
    let perimeter = (altura.value + base.value) * 2;
    valuePerimeter.innerHTML = perimeter;
    //diagonal
    let diagonal = Math.sqrt(base.value**2 + altura.value**2);
    valueDiagonal.innerHTML = diagonal;
});