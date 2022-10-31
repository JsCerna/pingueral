
let vDia = 160.000;
let cantidadDias = document.getElementById('inputConsultar').value
// let cantidadDias = 6;

// function pedirDatos (vDia, cantidadDias){
// return vDia * cantidadDias
// }

// function calcular(vDia, cantidadDias, callback){
//     return callback(vDia, cantidadDias);
// }
function multiplicar(vDia, cantidadDias){
    return vDia * cantidadDias;
}
console.log(multiplicar(vDia, cantidadDias));

let respuesta = multiplicar(vDia, cantidadDias);


let contenedor = document.getElementById('respuestas');
contenedor.innerHTML = `<table class="tabliya" id="tabla1">
<thead>
<tr>
  <th scope="col">Parámetro</th>
  <th scope="col">Valores</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Total dias</td>
  <td>${respuesta}</td>

</tr>
</table>`

let boton = document.getElementById("btn");
boton.addEventListener("onClick", (evento) => multiplicar(evento));