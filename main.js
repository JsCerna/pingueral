const vDia = 160000;
const leña = 5000;
const limp = 20000;

function multiplicar1(){
  
  const cantidadDias = document.getElementById("inputConsultar").value;
  const resp = vDia * cantidadDias;
  const resp2 = leña * cantidadDias;
  const totalGastos = resp2 + limp;
  const totalBruto = resp - totalGastos;
  const secenta = totalBruto * 0.6;
  const cuarenta = totalBruto * 0.4;
  document.getElementById("respuesta").innerText = resp; 
  document.getElementById("respuesta2").innerText = resp2; 
  document.getElementById("respuesta3").innerText = totalGastos;
  document.getElementById("respuesta4").innerText = totalBruto;
  document.getElementById("respuesta5").innerText = secenta;
  document.getElementById("respuesta6").innerText = cuarenta;
  return resp, resp2;
  
}

let contenedor = document.getElementById('respuestas');
contenedor.innerHTML = `<table class="tabliya" id="tabla1">
<thead>
<tr>
  <th scope="col">Parámetros</th>
  <th scope="col">Valores</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Total dias</td>
  <td><p id="respuesta">0</p></td>
</tr>
<tr>
<td style="color: red">Gasto Leña</td>
<td style="color: red"><p id="respuesta2">0</p></td>
</tr>
<tr>
  <td style="color: red">Limpieza</td>
  <td style="color: red">20000</td>
</tr>
<tr>
<td style="color: red">Total Gastos</td>
<td style="color: red"><p id="respuesta3">0</p></td>
</tr>
<tr>
<td>Total Bruto</td>
<td><p id="respuesta4">0</p></td>
</tr>
<tr>
<td style="color: purple">60% Para mamy</td>
<td style="color: purple"><p id="respuesta5">0</p></td>
</tr>
<tr>
<td style="color: blue">40% Para toti</td>
<td style="color: blue"><p id="respuesta6">0</p></td>
</tr>
</table>`

let boton = document.getElementById("btn");
boton.addEventListener("onClick", (evento) => "multiplicar1, multiplicar2"(evento));