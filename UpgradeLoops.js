// 1. Usa Includes

// const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

// for (product of products) {

//     console.log(product.includes("Camiseta"))

// }


// 2. Condicionales avanzados

// const alumnos = [

//     { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
//     { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
//     { name: 'Juan Miranda', T1: false, T2: true, T3: true },
//     { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
//     { name: 'Raquel Benito', T1: true, T2: true, T3: true }
// ]



// for (const alumno of alumnos) {
//     if (alumno.T1 === true && alumno.T2 === true || alumno.T1 === true && alumno.T3 === true || alumno.T2 === true && alumno.T3 === true) {
//         Object.defineProperty(alumno, "isApproved", { value: true })
//     }
// }

// console.log(alumnos)


// 3. Probando for of

// const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

// for (places of placesToTravel) {

// 	console.log(places)

// }


// 4. Probando for in 

// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
// }

// for (alienProps in alien) {

// 	console.log(alienProps + ":" + alien[alienProps])

// }



// 5. Probando for

// const placesToTravel = [

// 	{id: 5, name: 'Japan'}, 
// 	{id: 11, name: 'Venecia'}, 
// 	{id: 23, name: 'Murcia'}, 
// 	{id: 40, name: 'Santander'}, 
// 	{id: 44, name: 'Filipinas'}, 
// 	{id: 59, name: 'Madagascar'}

// ]


// function ElimPlacesToTravel () {

// 	for (places of placesToTravel) {


// 	console.log(places)

// }

// placesToTravel.splice(1,1)
// placesToTravel.splice(2,1)

// console.log(placesToTravel)

// } 


// ElimPlacesToTravel()


// 6. Mixed for e includes

// const toys = [
//     { id: 5, name: 'Buzz MyYear' },
//     { id: 11, name: 'Action Woman' },
//     { id: 23, name: 'Barbie Man' },
//     { id: 40, name: 'El gato con Guantes' },
//     { id: 40, name: 'El gato felix' }
// ]

// const auxToys = []

// for (const toy of toys) {
//     if (!(toy.name).includes("gato")) {
//         auxToys.push(toy)
//     }
// }

// console.log(auxToys)


// 7. For of avanzado


// const popularToys = [];
// const toys = [
//     { id: 5, name: 'Buzz MyYear', sellCount: 10 },
//     { id: 11, name: 'Action Woman', sellCount: 24 },
//     { id: 23, name: 'Barbie Man', sellCount: 15 },
//     { id: 40, name: 'El gato con Guantes', sellCount: 8 },
//     { id: 40, name: 'El gato felix', sellCount: 35 }
// ]


// for (const toy of toys) {
//     if ((toy.sellCount) > 15) {
//         popularToys.push(toy)
//     }
// }

// console.log(popularToys)