
//-------------------------------- Uso de Let y Const-------------------------------
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};

//**********************************Solucion*************************************
//let
let persona = {
  nombre2: "Esteban",
  appelido: "Lopez",
  edad2: 22
};

let {nombre2, appelido, edad2} = persona; 

//Const
const PERSONA = {
  nombre3:"cecilia",
  edad3:50
};

const {nombre3,edad3} = PERSONA;

//Destructuracion de arrelos
// let personas:string[] = ["juan", "Esteban", "Ana"];
// let [elmejor, elmejornumero2, lafea ] = personas;
// console.log(elmejor,elmejornumero2,lafea);

// -------------------------Cree una interfaz que sirva para validar el siguiente objeto-------------------
//var batman = {
//  nombre: "Bruno Díaz",
// artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
//}

//**************************************Solucion*********************************
interface SuperHeroe{
  nombre:string,
  artesMarciales:string[];
}

function imprimir(heroe:SuperHeroe){
      console.log("El super heroe: " , heroe.nombre, " conoce las siguientes artes marciales: ", heroe.artesMarciales);
}

let batman:SuperHeroe = {
  nombre: "Batman",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
};

imprimir(batman);
//--------------------------Convertir esta funcion a una funcion de flecha---------------------------------------
function resultadoDoble( a, b ){
  return (a + b) * 2
}
//*************************************************Solucion************************************************
//1er ejemplo
// let resultadoDobleF = (a:number,b:number) => (a + b) * 2;

//2do ejemplo
let resultadoDobleF = function(a:number,b:number)
{
   (a + b) * 2;
}

//--------------------------- Función con parametros obligatorios, opcionales y por defecto-------------
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

//***************************Solucion************************************
function getAvenger2( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

//************************************Solucion*********************************
class rectangulo{
  base:number;
  altura:number;

  constructor(base:number,altura:number){
    this.base = base;
    this.altura = altura;
  }
  //Forma de crear una funcion dentro de una clase en TypeScript, por que en TypeScript, no se puede declarar functions, ni variables tipo var, let, const.
  add(base:number,altura:number):number{
    return base*altura
  };
  

}