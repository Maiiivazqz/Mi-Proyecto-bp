
// Solicito al Usurario si es Propietario o Inquilino para ingresar a la Pagina.
//  let propietario = prompt("Usted es propietario?");

//  if(propietario == "si"){
//      alert("Ingrese con su mail y contraseña")
// } else if(propietario == "no"){
//    alert("si es inquilino ingrese su mail y contraseña")
// } 

let pass = 2022;
let dato = parseInt(prompt("cual es la contrasenia?"));
let intentos = 3;

while((dato != pass) && (intentos > 0)) {
    intentos--;
    alert(`Contraseña Incorrecta. Le quedan ${intentos} intentos`);
    if(intentos == 0){
        break;
    }
    dato = parseInt(prompt("cual es la contrasenia?"));
}

