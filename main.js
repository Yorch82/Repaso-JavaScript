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

console.log ( getCiudadesOrdenada("Valencia, Alicante"))

// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

