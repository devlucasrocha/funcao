let dobro = function (a) {
    return a * 2
}
console.log(dobro(5))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(4))

dobro = a => 2 * a // retorno implicito
console.log(dobro(2))

let ola = function () {
    return 'Ola'
}
console.log(ola())

ola = () => "ola"
console.log(ola())

ola = _ => 'ola'
console.log(ola())
