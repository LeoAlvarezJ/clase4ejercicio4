let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese su posicion en la carrera ";

/*Tenga en cuenta que para el primer puesto se entrega medalla de oro,
 segundo puesto medalla de plata y tercer puesto medalla de bronce. 
 En caso que quede en otra posición se entrega certificado de 
 participación*/

btnEnviar.addEventListener("click", () => {
  let numeroIngresado: number = Number(dato1.value);
  //ESTE PEDAZO DE CODIGO ES IGUAL AL DE ABAJO PERO CON SWITCH PODEMOS OPTIMIZAR MAS
  /* if (numeroIngresado == 1) {
    console.log("Feliitaciones! Gano medalla de ORO;");
  } else if (numeroIngresado == 2) {
    console.log("Feliitaciones! Gano medalla de PLATA;");
  } else if (numeroIngresado == 3) {
    console.log("Feliitaciones! Gano medalla de BRONCE;");
  } else {
    console.log("Feliitaciones! Recibe certificado de participacion!;");
  }
 */

  switch (numeroIngresado) {
    case 1:
      console.log("Feliitaciones! Gano medalla de ORO;");
      break;

    case 2:
      console.log("Feliitaciones! Gano medalla de PLATA;");
      break;
    case 3:
      console.log("Feliitaciones! Gano medalla de BRONCE;");
      break;
    default:
      console.log("Feliitaciones! Recibe certificado de participacion!;");
  }
});
