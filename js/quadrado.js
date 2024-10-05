const form = document.getElementById('quadrado-calculo');
const valueToChange = document.getElementById('data-value');
const input = document.getElementById('quadrado-input');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //para n subir infos para o URL
    let valueChanged = input.value ** 2;
    valueToChange.innerHTML = valueChanged;
});1