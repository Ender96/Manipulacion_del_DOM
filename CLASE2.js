const input1=document.querySelector("#calcular1");
const input2=document.querySelector("#calcular2");
const boton=document.querySelector(".btn");
const resultado=document.querySelector(".texto");
const formulario=document.querySelector("form")

// boton.addEventListener(`click`,BTN);
formulario.addEventListener(`submit`,BTN)


function BTN(event)
{
    console.log({event});
    event.preventDefault();   
    let valor1=parseInt(input1.value);
    let valor2=parseInt(input2.value);
    const result=valor1*valor2;
   resultado.innerText="El resultado es: " +result;
}

//CLASE2
// ONCLICK AND  ONNCHANGE
//se coloca directamente en el html y realiza lo que se le indica a traves de javascript
//addEventListener , se utliza para realizar una accion en el html desde javascript.
//evitar que la pagina se recargue cuando se pulsa el boton dentro del formulario
//