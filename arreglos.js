// 1. Definición de arreglos (Corregido: usamos [] para arreglos) [cite: 28, 29]
let edadesIzquierda = [];
let edadesDerecha = [];

// 2. Función para capturar y agregar edades [cite: 31]
function agregarEdad() {
    const inputEdad = document.getElementById("edad");
    const edad = parseInt(inputEdad.value);

    if (!isNaN(edad)) {
        edadesIzquierda.push(edad); // [cite: 39]
        inputEdad.value = ""; // Limpiar el campo
        pintarArregloIzquierdo(); // [cite: 40]
    } else {
        alert("Por favor ingrese un número válido");
    }
}

// 3. Renderizado del Arreglo Izquierdo [cite: 62]
function pintarArregloIzquierdo() {
    const tbody = document.getElementById("tablaIzquierda");
    let html = "";

    for (let i = 0; i < edadesIzquierda.length; i++) {
        html += `
            <tr>
                <td>${edadesIzquierda[i]}</td>
                <td><button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button></td>
                <td><button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button></td>
            </tr>`;
    }
    tbody.innerHTML = html;
}

// 4. Renderizado del Arreglo Derecho [cite: 83]
function pintarArregloDerecha() {
    const tbody = document.getElementById("tablaDerecha");
    let html = "";

    for (let i = 0; i < edadesDerecha.length; i++) {
        html += `
            <tr>
                <td><button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button></td>
                <td>${edadesDerecha[i]}</td>
                <td><button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button></td>
            </tr>`;
    }
    tbody.innerHTML = html;
}

// 5. Funciones de eliminación (Uso de splice) [cite: 72, 89]
function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierdo();
}

function eliminarDerecho(indice) {
    edadesDerecha.splice(indice, 1);
    pintarArregloDerecha();
}

// 6. Lógica de movimiento entre arreglos [cite: 94, 98]
function moverHaciaDerecha(indice) {
    const edad = edadesIzquierda.splice(indice, 1)[0];
    edadesDerecha.push(edad);
    pintarArregloIzquierdo();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice) {
    const edad = edadesDerecha.splice(indice, 1)[0];
    edadesIzquierda.push(edad);
    pintarArregloIzquierdo();
    pintarArregloDerecha();
}