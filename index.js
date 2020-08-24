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

const aHackerSpeak = (str) => {
    let frasesAMinusculas = str.toLowerCase()
    let reemplazoLaI = frasesAMinusculas.replace(/i/g, "1")
    let reemplazoLaE = reemplazoLaI.replace(/e/g, "3")
    let reemplazoLaA = reemplazoLaE.replace(/a/g, "4")
    let reemplazoLaS = reemplazoLaA.replace(/s/g, "5")
    let reemplazoLaO = (letrasReemplazadas = reemplazoLaS.replace(/o/g, "0"))
    return letrasReemplazadas
}

console.log(aHackerSpeak('javascript')) // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')) // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')) // '4D4 L0V3L4C3'


// Ejercicio 4

const esPuenteSeguro = (puente) => {
    if (puente.includes(" ")) {
        return false
    }
    else {
        return true
    }
}

console.log(esPuenteSeguro('### ##')) // false
console.log(esPuenteSeguro('##### ####')) // false
console.log(esPuenteSeguro('########')) // true