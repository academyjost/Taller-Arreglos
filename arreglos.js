let edadesIzquierda={}
let edadesDerecha={}

function agregarEdad(){
    let edad = parseInt(document.getElementById("edad").value);
    if(!isNaN(edad)){
        edadesIzquierda.push(edad);//

    }else{
        alert("Por favor ingrese un numero valido");

    }
    pintarArregloIzquierdo();
}
function pintarArregloIzquierdo(){
    let tbody = document.getElementById("TablaIzquierda");
    let contenidoTabla = "";
    let edadRecuperar;
    for(let i=0;i<edadesIzquierda.legth; i++){
        edadRecuperar=edadesIzquierda{i};
        contenidoTabla+="<tr>";
        contenidoTabla+="<td>"+edadRecuperar + "</td>";
        contenidoTabla+="<td> <button class='btn-eliminar'>Eliminar</button> </td> <td></td>"
        contenidoTabla+="</tr>";
    }
    tbody.innerHTML = contenidoTabla;
}
function eliminarIzquierdo(indice){
    

}