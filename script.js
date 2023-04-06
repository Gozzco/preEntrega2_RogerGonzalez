/*El cliente recibió un catalogo de productos (organizados en el código como objetos), este debe ingresar por prompt el nombre del producto del cual está interesado y recibirá una alerta indicando si hay disponibilidad (establecida en las propiedades del objeto), con los datos del producto y su precio + IVA, en caso de que no esté disponible se le indicará mediante una alerta. Al final habrá un confirm que, si el usuario acepta, le permitirá agregar nuevos productos. Estos productos disponibles indicados por el usuario se pushearan a un nuevo array y se reflejarán en la consola*/

/*Catalogo: Silla Falcon, Silla Zulia, Silla BArinas, Silla Aragua, Silla Lara, Silla BKF, Silla Eames, Silla Merida, Silla Tachira, Silla Caracas, Silla Nueva Esparta*/

function Producto (nombreProducto, material, precio, disponibilidad) {
    this.nombreProducto = nombreProducto;
    this.material = material;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    }

let sillaFalcon = new Producto ("Silla Falcon", "Madera", 12000, true);
let sillaZulia = new Producto ("Silla Zulia", "Madera", 11300, false);
let sillaBarinas = new Producto ("Silla Barinas", "Metal", 13600, true);
let sillaAragua = new Producto ("Silla Aragua", "Madera", 15400, true);
let sillaLara = new Producto ("Silla Lara", "Metal", 13599, true);
let sillaBkf = new Producto ("Silla BKF", "Metal", 35000, true);
let sillaEames = new Producto ("Silla Eames", "Metal", 13999, false);
let sillaMerida = new Producto ("Silla Merida", "Madera", 17800, true);
let sillaTachira = new Producto ("Silla Tachira", "Madera", 13450, false);
let sillaCaracas = new Producto ("Silla Caracas", "Madera", 19500, false);
let sillaNuevaEsparta = new Producto ("Silla Nueva Esparta", "Madera", 14900, true);

const catalogo = [
    sillaFalcon, 
    sillaZulia,
    sillaBarinas,
    sillaAragua,
    sillaLara,
    sillaBkf,
    sillaEames,
    sillaMerida,
    sillaTachira,
    sillaCaracas,
    sillaNuevaEsparta
];

const productosSeleccionados = [];

do{
    let nombreIngresado = prompt ("Ingresa el nombre del producto que estás buscando");

    const productoEncontrado = catalogo.find(Producto => Producto.nombreProducto === nombreIngresado);
    
    if (productoEncontrado) {
        if (productoEncontrado.disponibilidad) {

        const precioConIva = productoEncontrado.precio * 1.21;

        alert(`El producto "${productoEncontrado.nombreProducto}" está disponible.\n\n- La estructura está hecha en ${productoEncontrado.material}\n- Su precio total es de: $${Math.round(precioConIva)}`);

        productosSeleccionados.push(productoEncontrado, productoEncontrado.precio * 1.21);

        } else {

        alert(`Lo sentimos, el producto "${productoEncontrado.nombreProducto}" no está disponible en este momento.`)

        }
    } else {

    alert("Lo siento, el producto que ingresaste no se encuentra en el catálogo. Por favor verifica que se haya ingresado correctamente el nombre");
    }

}while (confirm ("Deseas agregar un nuevo producto?")){

    if (confirm === true) {
        nombreIngresado = prompt ("Ingresa el nombre del producto que estás buscando");

    }else{
        alert ("Muchas gracias!")
        console.log ("Productos seleccionados por el cliente: ", productosSeleccionados);
    }
}





