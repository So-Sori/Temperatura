//Declaro las varibales primero para las operaciones
//se llaman tal cual que su ID, para facilitar el recordar
let span = document.getElementById("text-area");
let btn = document.getElementById("btn").value;
// Number(btn);
const valorA = 273.15; //valores absolutos en las operaciones
const valorB = 32;


let seleccionar = document.getElementById("opciones");
let seleccionar2 = document.getElementById("opciones2");

seleccionar.addEventListener('click',operacion);

function operacion(){
    let eleccion = seleccionar.value;
    let eleccion2 = seleccionar2.value;
    let btn = document.getElementById("btn").value; //btn en la operacion representa la primra temperatura ej: F a C
    btn = Number(btn); //convierto el valor obtenido a numero porque el boton  lo manda como texto

    if(eleccion === "Fahrenheit" && eleccion2=== "Celsius2"){//si las elecciones corresponden a esos *valores* haz esto
       
        let result = (btn - valorB)/ 1.8;
        result = result.toFixed(3);
        span.textContent = result;
    }
    else if(eleccion === "Fahrenheit" && eleccion2=== "Kelvin2"){
      
        let result =  5/9 * (btn - valorB) + valorA;
        result = result.toFixed(3);
        span.textContent = result;
    }
    else if(eleccion === "Celsius"  && eleccion2==="Fahrenheit2" ){
      
        let result = btn * 1.8 + valorB;
        result = result.toFixed(3);
        span.textContent = result;
     }
    else if(eleccion === "Celsius"  && eleccion2==="Kelvin2" ){

       let result = btn + valorA;
       result = result.toFixed(3);
       span.textContent = result;
    }
    else if(eleccion === "Kelvin"  && eleccion2==="Fahrenheit2" ){

        let result = 1.8 * (btn - valorA) + valorB;
        result = result.toFixed(3);
        span.textContent = result;
     }
     else if(eleccion === "Kelvin"  && eleccion2==="Celsius2" ){

        let result = btn - valorA;
        result = result.toFixed(3);
        span.textContent = result;
     }
    else{
       span.textContent = `Lo mismo ${btn}`;
    }
}
/*
Fahrenheit
Celsius
Kelvin */