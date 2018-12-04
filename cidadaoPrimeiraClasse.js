// Funcao em JS EH First-Class Object (Citizens)
// Higher-order function

// Criar de forma liberal
function fun1(a, b) { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro
function run(fun) {
    fun()
}

run(function () { console.log("Executando...")})

// Uma funcao pode retornar/conter uma funcao

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(1)
const cintoMais = soma(2, 3)
cintoMais(1)