function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
 const inicio = Math.min(a, b);
  const fin = Math.max(a, b);
  for (let i = inicio; i <= fin; i++) {
    if (i === 0) {
      producto = 0;
      break;
    }
    producto *= i;
  }
  return producto;
  }
module.exports = productoEntreNúmeros;