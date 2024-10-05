const form = document.getElementById('polygon-form');
const areaResult = document.getElementById('value-area');

function calculatePolygonArea(n, sideLength) {
    // Fórmula para a área de um polígono regular com N lados e comprimento de lado "a"
    const area = (n * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / n));
    return area.toFixed(2);
}

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o reload da página

    const n = parseInt(document.getElementById('polygon-type').value);
    const sideLength = parseFloat(document.getElementById('side-length').value); 

    if (sideLength > 0) {
        const area = calculatePolygonArea(n, sideLength);
        areaResult.innerHTML = `${area} unidades²`;
    } else {
        areaResult.innerHTML = 'Por favor, insira um comprimento de lado válido.';
    }
});
