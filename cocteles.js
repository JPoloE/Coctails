var bebida1 = {
    numero: "1",
    imagen: new Image(),
    nombre: "Canary Cabbler",
    numIngredientes: 3,
    ingredientes: ["Vodka", "Pre-Batch Canary", "Zumo Limon"],
    metodo: "agitado"
};

var bebida2 = {
    numero: "2",
    imagen: new Image(),
    nombre: "Spicy Toucan",
    numIngredientes: 3,
    ingredientes: ["Mezcal", "Pre-Batch Toucan", "Tintura Pipilongo"],
    metodo: "agitado"
};

var bebida3 = {
    numero: "3",
    imagen: new Image(),
    nombre: "Tiki Cardenal",
    numIngredientes: 3,
    ingredientes: ["Ron", "Pre-Batch Cardenal", "Zumo Limon"],
    metodo: "agitado"
};

var bebida4 = {
    numero: "4",
    imagen: new Image(),
    nombre: "Turpial Sling",
    numIngredientes: 3,
    ingredientes: ["Whisky", "Pre-Batch Turpial", "Zumo Limon"],
    metodo: "agitado"
};

var bebida5 = {
    numero: "5",
    imagen: new Image(),
    nombre: "Falcon Highball",
    numIngredientes: 4,
    ingredientes: ["Whisky", "Pre-Batch Falcon", "Zumo Limon", "Soda"],
    metodo: "agitado"
};



function generarNumeroAleatorio() {
    document.getElementById('titulo').innerText = '¿Otra vez?';
    var numeroAleatorio = Math.floor(Math.random() * 5) + 1;

    var bebidas = [bebida1, bebida2, bebida3, bebida4, bebida5];
    var bebida = bebidas[numeroAleatorio - 1];

    document.getElementById("h3nombre").innerText = bebida.nombre;

    var container = document.getElementById("inputContainer");
    container.innerHTML = '';

    for (var i = 0; i < bebida.numIngredientes; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = "input" + i;
        input.placeholder = "Ingrediente " + (i + 1);
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}

function vaciarInputs() {
    var container = document.getElementById("inputContainer");
    container.innerHTML = '';
}

function btnVerifi() {
    var nombreBebida = document.getElementById("h3nombre").innerText.trim();
    var bebida = null;

    // Buscar el objeto de bebida correspondiente al nombre
    for (var i = 1; i <= 5; i++) {
        if (window["bebida" + i].nombre === nombreBebida) {
            bebida = window["bebida" + i];
            break;
        }
    }

    if (bebida) {
        // Obtener todos los inputs de ingredientes
        var inputs = document.querySelectorAll("#inputContainer input");

        // Obtener los valores ingresados en los inputs
        var ingredientesIngresados = [];
        inputs.forEach(function(input) {
            ingredientesIngresados.push(input.value.trim().toLowerCase());
        });

        // Verificar si todos los ingredientes ingresados están en la lista de ingredientes de la bebida
        for (var i = 0; i < ingredientesIngresados.length; i++) {
            var ingredienteCorrecto = false;
            for (var j = 0; j < bebida.numIngredientes; j++) {
                if (bebida.ingredientes[j].toLowerCase() === ingredientesIngresados[i]) {
                    ingredienteCorrecto = true;
                    break;
                }
            }
            // Cambiar el color del input según si el ingrediente es correcto o no
            if (!ingredienteCorrecto) {
                inputs[i].style.backgroundColor = "red";
            } else {
                inputs[i].style.backgroundColor = "green";
            }
        }
    }
    return bebida;
}

function mostReceta(bebida){

    var bebida = btnVerifi();

    console.log(bebida);

    var contenedor = document.getElementById("nombre");
    var contenedor2 = document.getElementById("ingredientes");
    var contenedor3 = document.getElementById("metodo");

    contenedor.textContent = bebida.nombre;

    var contenidoHTML = "";
    for (var i = 0; i < bebida.numIngredientes; i++) {
        contenidoHTML +=(i+1) + ": " +  bebida.ingredientes[i] + "<br>";
        console.log(bebida.ingredientes[i]);
    }
    
    // Asignamos el contenido HTML al contenedor
    contenedor2.innerHTML = contenidoHTML;

    contenedor3.textContent = bebida.metodo;

    bebida1.imagen.src = "image/logo.jpg";
    bebida2.imagen.src = "image/logo.jpg";
    bebida3.imagen.src = "image/logo.jpg";
    bebida4.imagen.src = "image/logo.jpg";
    bebida5.imagen.src = "image/logo.jpg";
    
    bebida1.imagen.onload = function() {
        var contenedor = document.getElementById("contenedorImagen");
        contenedor.appendChild(bebida1.imagen);
    };
    
    bebida2.imagen.onload = function() {
        var contenedor = document.getElementById("contenedorImagen");
        contenedor.appendChild(bebida1.imagen);
    };
    
    bebida3.imagen.onload = function() {
        var contenedor = document.getElementById("contenedorImagen");
        contenedor.appendChild(bebida1.imagen);
    };
    
    bebida4.imagen.onload = function() {
        var contenedor = document.getElementById("contenedorImagen");
        contenedor.appendChild(bebida1.imagen);
    };
    
    bebida5.imagen.onload = function() {
        var contenedor = document.getElementById("contenedorImagen");
        contenedor.appendChild(bebida1.imagen);
    };

}