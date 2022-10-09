
//  for (let i = 1; i< 20; i++){
//      let propietario = prompt("ingresar nombre y pilar");
//      alert("turno N° "+i+" Nombre:" + propietario);
//      break;
//  }

    //OBJETOS//
 const propietario1 = {
     nombre:"Oscar", 
     apellido:"Lodeiro",
     pilar: 99,
     categoria: "propietario",
     vehiculo: 4,
 }
console.log(propietario1);

class Propietario {
    constructor(nombre, apellido, pilar, categoria, vehiculos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pilar = pilar;
        this.categoria = categoria;
        this.vehiculos = vehiculos;
    }
}

const oscar = new Propietario("oscar", "lodeiro",99, "propietario",4);
const diego = new Propietario("Diego", "Santamaria",120, "inquilino",3);
const juan = new Propietario("Juan", "Gomez",02, "propietario",5);

 console.log(oscar);

const crearPropietario = ()=>{
    let nombrePropietario = prompt("como se llama usted?");
    let apellidoPropietario = prompt("cual es su apellido?");
    let pilarPropietario = prompt("numero de pilar o departamento");
    let categoriaPropietario = prompt("es propietario o inquilino?");
    let vehiculoPropietario = prompt("cuantos vehiculos tiene en su propiedad?");

    const propietario = new Propietario(nombrePropietario, apellidoPropietario, pilarPropietario, categoriaPropietario, vehiculoPropietario);
     console.log(propietario);
     return propietario;
    }


