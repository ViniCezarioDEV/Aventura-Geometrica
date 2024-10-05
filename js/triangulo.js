const form = document.getElementById('triangulo-calculo');
const input = document.getElementById('triangulo-input');
const valueToChangeArea = document.getElementById('data-value-area');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //para n subir infos para o URL
    //area
    let area = (Math.sqrt(3) / 4) * (input.value ** 2);
    valueToChangeArea.innerHTML = area;

});