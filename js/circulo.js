const form = document.getElementById('circulo-calculo');
const input = document.getElementById('circulo-input');
const valueToChangeArea = document.getElementById('data-value-area');
const valueToChangeDiameter = document.getElementById('data-value-diameter');
const valueToChangeCircunfer = document.getElementById('data-value-circunfer');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //para n subir infos para o URL
    //area
    let area =  3.14 * input.value ** 2;
    valueToChangeArea.innerHTML = area;

    //diameter
    let diameter = 2 * input.value;
    valueToChangeDiameter.innerHTML = diameter;

    //circunfer
    let circunfer = 2 * 3.14 * input.value;
    valueToChangeCircunfer.innerHTML = circunfer;
});