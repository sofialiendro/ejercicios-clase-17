// Ejercicio 1 

const esValida = (contrasenia) => {
    if (contrasenia.length >= 8) {
        return true
    }
    else {
        return false
    }
}

console.log(esValida('contraseniaMuySegura')) // true
console.log(esValida('abc123')) // false


// Ejercicio 2

const esFraccionMayorAUno = (fraccion) => {
    if (fraccion > 1) {
        return true
    }
    else {
        return false
    }
}

console.log(esFraccionMayorAUno(1/2)) // false
console.log(esFraccionMayorAUno(2/2)) // false
console.log(esFraccionMayorAUno(4/2)) // true


// Ejercicio 3