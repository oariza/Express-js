const request = {
    body: {
        name: 'charles',
        generation: 7,
        age: 24
        phone: undefined,
        gender: "male",
        email: "bla@bla.com"
    }
}

// deconstrucción

// deconstruccion de objeto

// const {atributos a obtener} = el objeto a recostruir (del que quiero sacar atributos)
const { name, generation, age } = request.body

console.log('name: ', name)
console.log('generation: ', generation)


//renombramiento en la deconstruccion
// se usa el operador :
// lado izquiero es el nombre del atributo como está en el objeto
// lado derecho de los dos puntos es el nombre deseado
const { name:koderName, age:koderAge } = request.body
console.log('koderName: ', koderName)
console.log('koderAge: ', koderAge)


// dar un valor por defecto
// se usa el valor de asignacion (=)

const { phone = '5555555555' } = request.body
console.log('phone: ', phone)


// todo junto
const { name:mentorName = 'Isra'} = request.body
console.log('mentorName: ', mentorName)


//buenas practicas
//usar varias lineas al deconstruir más de dos atributos de un objeto
const { name: dudeName = 'dude', phone, age: dudeAge = 18, generation } = request.body // NO
} = request.body
const {
    name: dudeName = 'dude',
    phone,
    age: dudeAge = 18,
    generation
} = request.body // SÍ


// ----------------------------------------------


//Decostruccion de arreglo
const koders =['Mar', 'Elvira', 'Airy', 'Fer']

// const [elementos Posicionales que quiero del arreglo] = arreglo a ser deconstruido

const [ x, y, z, a, b='extra' ] = koders
console.log('x: ', x) // x: Mar
console.log('y: ', y) // y: Elvira
console.log('z: ', z) // z: Airy
console.log('a: ', a) // a: Fer
console.log('b: ', b) // b: extra


// spread y rest operator (...)
// spread es esparcir, nos ayuda a sacar los valores de un objeto
// rest nos ayuda a agrupar el resto de atributos/ miembros en un solo contenedor

//rest operator(...), se caracteriza porque se usa dentro de una deconstruccion, del lado izq de igual
const { email, ...restoDelObjeto } = request.body
console.log('email: ', email) // email: bla@bla.com
console.log('restoDelObjeto: ', restoDelObjeto) //restoDelObjeto: {generation: 7, age: 24, phone: undefined, gender: 'male}
//Arrays
const [ unKoder, otroKoder ...restoDelArreglo ] = koders
console.log('unKoder', unKoder) // Mar
console.log('restoDelArreglo: ', restoDelArreglo) // [Airy, Fer]


//Spread operator (...) pero del lado derecho del igual

const koderPersonal = {
    name: 'name',
    age: 'age'
}

const koderKodemiaInfo = {
    generation: 7,
    fechaIngreso: new Date()
}

const koderCompleto = { ...koderPersonal, ...koderKodemiaInfo }
console.log('koderCompleto:' koderCompleto) // ambos objetos

const koderMasCompleto = {
    colorFav: 'azul',
    peliculaFav: 'Dora la exploradora'
    ...koderPersonal,
    ...koderKodemiaInfo
}
console.log('koder más completo: ', koderMasCompleto) //color, peli + ambos objetos

//Array spread
const sextaGen = [ 'Adan', 'Itiel', 'Luis', ]
const septimaGen = [ 'Fer', 'Omar', 'Elvira' ]

const sextaYSeptima = [ ...sextaGen, ...septimaGen, 'ultimo'] //junta los dos arreglos + ultimo