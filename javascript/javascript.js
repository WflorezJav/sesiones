// alert("Hola Sesion 4 dos");
// alert("Hola Sesion 4 tres");
// alert("Hola Sesion 4 cuatro");

// // debugger;
// console.log("Log Hola desde la consola de desrollo");
// alert("Hola Sesion 4 cinco");
// alert("Hola Sesion 4 seis");
// alert("Hola Sesion 4 siete");
// alert("Hola Sesion 4 ocho");

// console.log("Ya se ejecuto el alerta de ocho");

// alert("Hola Sesion 4 nueve");


// console.log("Ya se ejecuto el alerta de nueve");

var numero = 0.3 + 0.6; 
console.log("Numero:" , numero);


var string = "2.5" + " 0.6";
console.log("String:" , string);

var bool = true; //false
console.log("Boolean:" , bool);

var varnull = null;
console.log("Null:" , varnull);


var varund;
console.log("undefined:" , varund);

var navarn = "hola";
var varstring = "2.5";
console.log(+"hola");
console.log(+varstring + 1);


var vararray = ["manzana","pera","mango","melon"];
console.log("Arrays:", vararray);

var varobject = 
{
    nombre : "Pepe",
    identificacion: 1024654,
    direccion: {
        calle: 1
    },
    frutas:  ["manzana","pera","mango","melon"]
};

console.log("Object:", varobject);

 var opcion = 1;

if (opcion == 1) {
    console.log("Entro el numero 1");
}else if(opcion == 2)
{
    console.log("Entro el numero 2");
}else if(opcion == 3)
{
    console.log("Entro el numero 3");
}else
{
    console.log("no es ninguna de las opciones");
}


switch (opcion) {
    case 1:
        console.log("Entro el numero 1");
        break;
    case 2:
        console.log("Entro el numero 2");
        break;
    case 3:
        console.log("Entro el numero 3");
        break;
        
    default:
        console.log("no es ninguna de las opciones switch");
        break;
}

var numetoinicial = 0;
while(numetoinicial <3)
{
    console.log("numero:", numetoinicial);
    numetoinicial++;
    // if (condition) {
    //     numetoinicial
    // }
}


for (let numetoinicial = 0; numetoinicial < 3; numetoinicial++) {
    console.log("numero for:", numetoinicial);
}

for(fruta of vararray)
{
    console.log("Fruta:", fruta)
}

var input = document.getElementById("nombre");
console.log("input", input)



//alert("Finalizado");