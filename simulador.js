const pedido = []

let textoCafe = "¿Qué café quiere pedir? 1-Espreso simple ($540), 2-Espreso doble ($600), 3-Flat white ($900), 4-Capuccino ($800), 5-Volver al menú principal"

class Producto{
    constructor(nombre, precio, cantidad, tipo){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.tipo = tipo
    }
    calculoParcial(){
        return this.precio * this.cantidad
    }

}

function calculoTotal(cafe, jugos, laminados, sandwiches, pasteleria){
    return cafe +jugos + laminados + sandwiches + pasteleria
}

function hacerPedido(maximo, texto){
    let opcion =parseInt(prompt(texto))
    while( (0 > opcion || opcion > maximo) || isNaN(opcion)) {
        opcion =parseInt(prompt(texto))
    }
    return opcion
}
let textoJugos = "¿Que jugo quiere pedir? 1-Jugo de naranja ($900), 2-Limonada ($850), 3-Pomelada ($800), 4-Volver al menú principal"

let textoLaminados = "¿Qué desea pedir: 1-Croissant ($770), 2-Medialuna ($660), 3-Pan de chocolate y frambuesa ($880), 4-Volver al menú principal"

let textoSandwiches = "¿Qué sandwich desea pedir: 1-Tapa de asado ($2300), 2-Brie ($2200), 3-Pollo ($2360), 4-Clasico ($2270), 5-Volver al menú principal"

let textoTortas = "¿Qué torta desea pedir: 1-Cheesecake ($2100), 2-Keylime pie ($2100), 3-Carrot cake ($1850), 4-Marquise franui ($2300), 5-Volver al menú principal"

let nombre = prompt("Bienvenido/a a TUESTE, ingrese su nombre")

let textoProductos = "Hola " + nombre + " ¿Qué desea pedir? Por favor ingrese el número de una de la opciones: 1-CAFÉ, 2-JUGOS, 3-LAMINADOS, 4-SANDWICHES, 5-TORTAS, 6-TERMINAR"

let productos = hacerPedido(6, textoProductos)

while(0 < productos && productos <= 5 ){
    let precioProducto
    switch(productos){
        case 1:
            cafeElegido = hacerPedido(5,textoCafe)
            while(0 < cafeElegido && cafeElegido <= 4){
                let producto = new Producto()
                producto.tipo = "cafe"
                switch(cafeElegido){
                    case 1:
                        producto.nombre = "Expreso"
                        producto.precio = 540                        
                        break
                    case 2: 
                        producto.nombre = "Espreso doble" 
                        producto.precio = 600
                        break
                    case 3: 
                        producto.nombre = "Flat white"
                        producto.precio = 900
                        break
                    case 4: 
                        producto.nombre = "Capuccino"
                        producto.precio = 800
                        break
                }
                producto.cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                pedido.push(producto)
                cafeElegido = hacerPedido(5,textoCafe)
            }
            break;
        case 2:
            jugoElegido = hacerPedido(4, textoJugos)
            while(0 < jugoElegido && jugoElegido <= 3){
                let producto = new Producto()
                producto.tipo = "jugo"
                switch(jugoElegido){
                    case 1: 
                        producto.nombre = "Jugo de Naranja"
                        producto.precio = 900
                        break
                    case 2: 
                        producto.nombre = "Limonada"
                        producto.precio = 850
                        break
                    case 3: 
                        producto.nombre = "Pomelada"
                        producto.precio = 800
                        break
                }
                producto.cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                pedido.push(producto)
                jugoElegido = hacerPedido(4, textoJugos)
            }
            break;
        case 3:
            laminadoElegido = hacerPedido(4, textoLaminados)
            while(0 < laminadoElegido && laminadoElegido <= 3){
                let producto = new Producto()
                producto.tipo = "laminado"
                switch(laminadoElegido){
                    case 1: 
                        producto.nombre = "Croissant"
                        producto.precio = 770
                        break
                    case 2: 
                        producto.nombre = "Medialuna"
                        producto.precio= 660
                        break
                    case 3: 
                        producto.nombre = "Pan de chocolate y frambuesa"
                        producto.precio = 880
                        break
                }
                producto.cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                pedido.push(producto)
                laminadoElegido = hacerPedido(4, textoLaminados)
            }
            break
        case 4:
            sandwichElegido = hacerPedido(5,textoSandwiches)
            while(0 < sandwichElegido && sandwichElegido <= 4){
                let producto = new Producto()
                producto.tipo = "sandwich"
                switch(sandwichElegido){
                    case 1: 
                        producto.nombre = "Tapa de asado"
                        producto.precio = 2300
                        break
                    case 2: 
                        producto.nombre = "Brie"
                        producto.precio = 2200
                        break
                    case 3: 
                        producto.nombre = "Pollo"
                        producto.precio = 2360
                        break
                    case 4: 
                        producto.nombre = "Clasico"
                        producto.precio = 2270
                        break
                }
                producto.cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                pedido.push(producto)
                sandwichElegido = hacerPedido(5,textoSandwiches)
            }
            break
        case 5:
            tortaElegida = hacerPedido(5,textoTortas)
            while(0 < tortaElegida && tortaElegida <= 4){
                let producto = new Producto()
                producto.tipo = "torta"
                switch(tortaElegida){
                    case 1: 
                        producto.nombre = "Cheesecake"
                        producto.precio = 2100
                        break
                    case 2: 
                        producto.nombre = "Keylime pie"
                        producto.precio = 2100
                        break
                    case 3: 
                        producto.nombre = "Carrot cake"
                        producto.precio = 1850
                        break
                    case 4: 
                        producto.nombre = "Marquise franui"
                        producto.precio = 2300
                        break
                }
                producto.cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                pedido.push(producto)
                tortaElegida = hacerPedido(5,textoTortas)
            }
            break
    }  
    
    productos = hacerPedido(6, textoProductos)
    
}

const cafe = pedido.filter(
    (sisu) => (sisu.tipo === "cafe")
)
let precioCafe = 0
console.log("Su pedido de cafe es: ")
for(let i = 0; i < cafe.length; i++){
    precioCafe += cafe[i].calculoParcial()
    console.log(cafe[i].cantidad + " " + cafe[i].nombre)
}

const jugos = pedido.filter(
    (sisu) => (sisu.tipo === "jugo")
)
let precioJugo = 0;
console.log("Su pedido de jugos es: ")
for(let i = 0; i < jugos.length; i++){
    precioJugo += jugos[i].calculoParcial()
    console.log(jugos[i].cantidad + " " + jugos[i].nombre)
}

const laminados = pedido.filter(
    (sisu) => (sisu.tipo === "laminado")
)
let precioLaminados = 0;
console.log("Su pedido de laminados es: ")
for(let i = 0; i < laminados.length; i++){
    precioLaminados += laminados[i].calculoParcial()
    console.log(laminados[i].cantidad + " " + laminados[i].nombre)
}

const sandwiches = pedido.filter(
    (sisu) => (sisu.tipo === "sandwich")
)
let precioSandwiches = 0
console.log("Su pedido de sandwiches es: ")
for(let i = 0; i < sandwiches.length; i++){
    precioSandwiches += sandwiches[i].calculoParcial()
    console.log(sandwiches[i].cantidad + " " + sandwiches[i].nombre)
}

const tortas = pedido.filter(
    (sisu) => (sisu.tipo === "torta")
)
let precioTortas = 0
console.log("Su pedido de tortas es: ")
for(let i = 0; i < tortas.length; i++){
    precioTortas += tortas[i].calculoParcial()
    console.log(tortas[i].cantidad + " " + tortas[i].nombre)
}


alert("El total de su compra es $ " + calculoTotal(precioCafe, precioJugo, precioLaminados, precioSandwiches, precioTortas) + " ¡Muchas gracias!")
