function calcular(operacion) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (operacion === 'suma') {
        resultado = num1 + num2;
    } else if (operacion === 'resta') {
        resultado = num1 - num2;
    } else if (operacion === 'multiplicacion') {
        resultado = num1 * num2;
    } else if (operacion === 'division') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = 'Error: División por cero';
        }
    }

   
    document.getElementById('resultado').innerText = resultado;
}