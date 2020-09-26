function tipoTriangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Triângulo Equilátero.')
    } else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
        console.log('Triângulo Isósceles.')
    } else{
        console.log('Triângulo Escaleno.')
    }
}

tipoTriangulo(3, 2, 1)