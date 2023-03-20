let nombreCliente=prompt("Ingresa tu nombre")

alert ("Bienvenido a nuestra tienda")

let apellidoCliente=prompt("Ingresa tu apellido")
let nombreCompleto=(nombreCliente + " " + apellidoCliente)
alert(nombreCompleto)

let pedidoRetiroEnvio = prompt ("¿Retira el pedido o se lo alcanzamos a su domicilio? Ingrese 1 para retiro en nuestra tienda y 2 para recibirlo en su domicilio" )

if(pedidoRetiroEnvio ==="1") {
console.log("Lo esperamos en nuestra tienda de lunes a viernes de 8 a 20")
} else if(pedidoRetiroEnvio ==="2") {
console.log("Ingrese su calle, altura y código postal")
}else {
console.log("Ingrese una opción válida"); 
}

let passCliente="2023";
let ingreso = false;

for (let i = 3; i >=0; i--) {
    let passIngresado=prompt("Ingresá tu pass " + (i+1) + " oportunidades")
    if (passIngresado == passCliente) {
        alert ("Ya podes hacer tu pedido")
        ingreso= true;
        break;
    } else {
        alert ("Pass incorrecta")
    }
}

if (ingreso) {
    alert ("¿Qué te gustaría ver?");
} else {
alert("error de ingreso");
}


