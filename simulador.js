let cafe = 0;
let jugos = 0;
let laminados = 0;
let sandwiches = 0;
let tortas = 0;

function calculoParcial(precioProducto, cantidad){
    return precioProducto * cantidad
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
let nombre = prompt("Bienvenido/a a TUESTE, ingrese su nombre")

let textoProductos = "Hola " + nombre + " ¿Qué desea pedir? Por favor ingrese el número de una de la opciones: 1-CAFÉ, 2-JUGOS, 3-LAMINADOS, 4-SANDWICHES, 5-TORTAS, 6-TERMINAR"

let textoCafe = "¿Qué café quiere pedir? 1-Espreso simple ($540), 2-Espreso doble ($600), 3-Flat white ($900), 4-Capuccino ($800), 5-Volver al menú principal" 

let textoJugos = "¿Que jugo quiere pedir? 1-Jugo de naranja ($900), 2-Limonada ($850), 3-Pomelada ($800), 4-Volver al menú principal"

let textoLaminados = "¿Qué desea pedir: 1-Croissant ($770), 2-Medialuna ($660), 3-Pan de chocolate y frambuesa ($880), 4-Volver al menú principal"

let textoSandwiches = "¿Qué sandwich desea pedir: 1-Tapa de asado ($2300), 2-Brie ($2200), 3-Pollo ($2360), 4-Clasico ($2270), 5-Volver al menú principal"

let textoTortas = "¿Qué torta desea pedir: 1-Cheesecake ($2100), 2-Keylime pie ($2100), 3-Carrot cake ($1850), 4-Marquise franui ($2300), 5-Volver al menú principal"


let productos = hacerPedido(6, textoProductos)

while(0 < productos && productos <= 5 ){
    let precioProducto
    let cantidad
    switch(productos){
        case 1:
            cafeElegido = hacerPedido(5,textoCafe)
            while(0 < cafeElegido && cafeElegido <= 4){
                switch(cafeElegido){
                    case 1: precioProducto = 540
                        break
                    case 2: precioProducto = 600
                        break
                    case 3: precioProducto = 900
                        break
                    case 4: precioProducto = 800
                        break
                }
                cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                cafe += calculoParcial(precioProducto, cantidad)
                cafeElegido = hacerPedido(5,textoCafe)
            }
            break;
        case 2:
            jugoElegido = hacerPedido(4, textoJugos)
            while(0 < jugoElegido && jugoElegido <= 3){
                switch(jugoElegido){
                    case 1: precioProducto = 900
                        break
                    case 2: precioProducto = 850
                        break
                    case 3: precioProducto = 800
                        break
                }
                cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                jugos += calculoParcial(precioProducto, cantidad)
                jugoElegido = hacerPedido(4, textoJugos)
            }
            break;
        case 3:
            laminadoElegido = hacerPedido(4, textoLaminados)
            while(0 < laminadoElegido && laminadoElegido <= 3){
                switch(laminadoElegido){
                    case 1: precioProducto = 770
                        break
                    case 2: precioProducto = 660
                        break
                    case 3: precioProducto = 880
                        break
                }
                cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                laminados += calculoParcial(precioProducto, cantidad)
                laminadoElegido = hacerPedido(4, textoLaminados)
            }
            break
        case 4:
            sandwichElegido = hacerPedido(5,textoSandwiches)
            while(0 < sandwichElegido && sandwichElegido <= 4){
                switch(sandwichElegido){
                    case 1: precioProducto = 2300
                        break
                    case 2: precioProducto = 2200
                        break
                    case 3: precioProducto = 2360
                        break
                    case 4: precioProducto = 2270
                        break
                }
                cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                sandwiches += calculoParcial(precioProducto, cantidad)
                sandwichElegido = hacerPedido(5,textoSandwiches)
            }
            break
        case 5:
            tortaElegida = hacerPedido(5,textoTortas)
            while(0 < tortaElegida && tortaElegida <= 4){
                switch(tortaElegida){
                    case 1: precioProducto = 2100
                        break
                    case 2: precioProducto = 2100
                        break
                    case 3: precioProducto = 1850
                        break
                    case 4: precioProducto = 2300
                        break
                }
                cantidad = parseInt(prompt("¿Cuántos desea pedir?"))
                tortas += calculoParcial(precioProducto, cantidad)
                tortaElegida = hacerPedido(5,textoTortas)
            }
            break
    }  
    
    productos = hacerPedido(6, textoProductos)
    
}

alert("El total de su compra es $ " + calculoTotal(cafe, jugos, laminados, sandwiches, tortas) + " ¡Muchas gracias!")
