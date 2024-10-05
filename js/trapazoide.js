const form = document.getElementById('trapezio-form');
const areaResult = document.getElementById('value-area');

function calculateTrapezoidArea(baseMaior, baseMenor, altura) {
    // Fórmula para a área do trapézio
    const area = ((baseMaior + baseMenor) * altura) / 2;
    return area.toFixed(2);
}

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o reload da página

    const baseMaior = parseFloat(document.getElementById('base-maior').value);
    const baseMenor = parseFloat(document.getElementById('base-menor').value);
    const altura = parseFloat(document.getElementById('altura').value); 

    if (baseMaior > 0 && baseMenor > 0 && altura > 0) {
        const area = calculateTrapezoidArea(baseMaior, baseMenor, altura);
        areaResult.innerHTML = `${area} unidades²`;
    } else {
        areaResult.innerHTML = 'Por favor, insira valores válidos.';
    }
});
