const vDia = 160000;
const leña = 5000;
const limp = 20000;

function multiplicar1(){
  
  const cantidadDias = document.getElementById("inputConsultar").value;
  const resp = vDia * cantidadDias;
  document.getElementById("respuesta").innerText = resp;

  return resp;
}


function multiplicar2(){
  
  const cantidadDias = document.getElementById("inputConsultar").value;
  const resp2 = leña * cantidadDias;
  document.getElementById("respuesta2").innerText = resp2;
  return resp2;

  function suma(resp2, limp){
    const resp3 = resp2 + limp;
    document.getElementById("respuesta3").innerText = resp3;
    return resp3;
  }
}

// function resta (){

//   const resp4 = 
//   document.getElementById("respuesta4").innerText = resp4;
//   return resp4;
// }

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
  <td><p id="respuesta">0</p></td>
</tr>
<tr>
<td>Gasto Leña</td>
<td><p id="respuesta2">0</p></td>
</tr>
<tr>
  <td>Limpieza</td>
  <td>20000</td>
</tr>
<tr>
<td>Total Gastos</td>
<td><p id="respuesta3">0</p></td>
</tr>
</table>`

let boton = document.getElementById("btn");
boton.addEventListener("onClick", (evento) => "multiplicar1, multiplicar2"(evento));