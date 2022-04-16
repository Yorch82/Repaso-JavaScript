// alert("JavaScript funcionando correctamente");

// 1. BUCLES

// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.

for ( let i = 4; i < 10; i ++ ) {
    console.log ( i );
}

// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.

for ( let i = 3; i < 18; i = i + 2 ) {
    console.log ( i );
}

// Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.

let viejunos = [];

for ( let viejuno of gente) {
    if (viejuno['edad'] > 25){     
        viejunos.push(viejuno);
    } 
}
console.log (viejunos);

// Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.

let personas = [];

for ( let persona of gente){
    if ( persona.nombre[0] === 'J'){
        personas.push( persona );
    }
}

console.log (personas);

// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

let nombreFiltrado = [];

for ( let nom of gente){
    if ( nom.nombre.length === 4){
        nombreFiltrado.push( nom );
    }
}

console.log (nombreFiltrado);

// Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.

let nombreJota = [];

for ( let jota of gente){
    if ( jota.nombre[0] === 'J' && jota.edad < 40){
        nombreJota.push( jota );
    }
}

console.log(nombreJota);


// 2. OBJETOS

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

let ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["ratón", "touchPad", "teclado"],
    almacenamiento: {
            discos: ["SSD", "HDD", "floppy"],
            maestro: 0,
        }
    
    } 


// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

let obj = {
    a: {
        b: true,
        c: ["pepe", 1],
    },
    d: 5,
    f: "Juan",
}

// TEST 1
if (typeof obj === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 2
  if (typeof obj.a.b === "boolean") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 3
  if (typeof obj.a.c[1] === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof obj.d === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (obj.d > 4 && obj.d < 8) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (typeof obj.f === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 7
  if (obj.f.length === 4) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'

  let arr = [obj1={name: "pepito", age: 25}, obj2={name: "pepito", age: 50}, ob3={name: "Jorch", age: 25}];  


  // TEST 1
  if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 7
  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 8
  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 10
  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


 // 3. FUNCIONES

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'


function convierteString (x) {
    if ( typeof x != 'number'){
        console.log('Debo ser ejecutada con un número');
    } else {
        return x.toString();        
    }
}

console.log(typeof convierteString(1));

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial (cadena) {
    if (typeof cadena != 'string'){
        console.log ('Debo ser ejecutada con un string');
    } else if (cadena.length < 1) {
        console.log ('Debo ser ejecutada con un string no vacío');
    } else {
        return cadena[0];
    }
}

console.log(caracterInicial('Jorge'));

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter (lastCharacter) {
    if (typeof lastCharacter != 'string'){
        console.log ('Debo ser ejecutada con un string');
    } else if (lastCharacter.length < 1) {
        console.log ('Debo ser ejecutada con un string no vacío');
    } else {
        return lastCharacter.slice(-1);
    }
}

console.log (ultimoCaracter('Jorge'));

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres (contador) {
    if (typeof contador!= 'string' ){
        console.log ('Debo ser ejecutada con un string');
    } else {
        return contador.length;
    }
}

console.log (cuentaCaracteres('Jorge'));

// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

function getCiudadesOrdenada (ciudades) {
    if ( typeof ciudades != 'string' || ciudades.indexOf(',') == -1 ) {
        console.log ('no es un formato correcto');
    } else {
        let ciudadesOrdenadas = ciudades.split(',');
        return ciudadesOrdenadas.sort();
    }
}

console.log ( getCiudadesOrdenada("Valencia, Alicante"));

// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo (palabra) {
  if ( typeof palabra != 'string') {
    console.log ('no es un formato correcto');
  } else {
      let palabraVolteada = palabra.split("").reverse().join(""); // split dividimos palabra en letras en un array, reverse da la vuelta al orden y join vuelve a unir todos los caracters en una palabra y se guarda en una variable.
      if ( palabra === palabraVolteada) {
        console.log ("Es palindromo");        
      } else {
        console.log ("No es palíndromo")
      }
  }   
}

esPalindromo ('rallar');

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar (precio) {
  if ( typeof precio != 'number') {
    console.log ('no es un formato correcto');
  } else {
    console.log (`El precio es de: ${precio}.00 €`)
  }
}

getPrecioMostrar(5);

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division (a,b) {
  return a / b;
}
console.log (division(5,2))

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar (checkParImpar) {
  if ( checkParImpar %2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log (esPar(2));

// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

let ordenarArray2 = [5,9,8,1,6,2,0];

ordenarArray2.sort(function(a,b){return a-b});

console.log(ordenarArray2);

// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

let imp = [];
let impares = [5,9,8,1,6,2,0];
function obtenerImpares ( impares ) {
  for ( i = 0; i < impares.length; i++){
    if ( impares[i] %2 != 0) {
      imp.push(impares[i]);
    }
  }
  return (imp);
}

console.log (obtenerImpares(impares));

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

let contador = 0;
let arrayNumeros = [3,2,1,2];

function sumarArray (arrayNum) {
  for ( i = 0; i < arrayNum.length; i++) {
    contador = contador + arrayNum[i];
  }
  return contador;
}

console.log ( sumarArray(arrayNumeros));

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

let cont = 1;
let arrayMultiplicar = [3,2,1,2];

function multiplicarArray (arrayMultiplicar) {
  for ( i = 0; i < arrayMultiplicar.length; i++) {
    cont = cont * arrayMultiplicar[i];
  }
  return cont;
}

console.log ( multiplicarArray(arrayMultiplicar));


// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

let lista = [];
let masQueCinco = [5,9,8,1,6,2,0];
function mayorCinco ( masQueCinco ) {
  for ( i = 0; i < masQueCinco.length; i++){
    if ( masQueCinco[i] > 5) {
      lista.push(masQueCinco[i]);
    }
  }
  return (lista);
}

console.log (mayorCinco(masQueCinco));

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.



function esPrimo (numPrim) {
	// Casos especiales
	if (numPrim == 0 || numPrim == 1 || numPrim == 4) return false;
	for (let x = 2; x < numPrim / 2; x++) {
		if (numPrim % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

console.log (esPrimo(numPrim = prompt ("Introduce un número:")));


// Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
