// Función que calcula el impuesto utilizando un callback
function calcularImpuesto(ingreso, calcular) {
    // Se calcula el impuesto usando el callback
    const impuesto = calcular(ingreso);
    console.log(`El impuesto sobre un ingreso de ${ingreso} es: ${impuesto}`);
}

// Callback para calcular el 15% de impuesto
const porcentajeImpuesto = (ingreso) => ingreso * 0.15;

// Ejecutar la función con un ingreso de ejemplo
calcularImpuesto(1000, porcentajeImpuesto);
// Resultado esperado en consola: "El impuesto sobre un ingreso de 1000 es: 150"
