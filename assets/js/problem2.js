/* let vsticker1 = Number(document.getElementById("input01").value);
let vsticker2 = Number(document.getElementById("input02").value);
let vsticker3 = Number(document.getElementById("input03").value);

let total= Number(vsticker1+vsticker2+vsticker3); */
const botonprob = document.querySelector("#btn1");
const botonprob2 = document.querySelector("#btn2");
const text1 = "Haz seleccionado ";
const text2 = " Solo puedes seleccionar 10 stickers. Presiona ' Limpiar ' para comenzar de nuevo";
const text3 = "Ingresa un valor en cada recuadro"
const text4 = "(Puedes elegir el que quieras)"

window.addEventListener("load", (event)=>{
    botonprob.style.backgroundColor  = "#EFEFEF"
    botonprob.style.color  = "black"
    document.querySelector("#totalstickers").textContent = text3;
    document.querySelector("#dataerror").textContent = text4;
})

botonprob.addEventListener("click", () =>{
    let vsticker1 = Number(document.querySelector("#input01").value);
    let vsticker2 = Number(document.querySelector("#input02").value);
    let vsticker3 = Number(document.querySelector("#input03").value);
    let totalstickers= Number(vsticker1+vsticker2+vsticker3);
    botonprob.style.backgroundColor  = "#EFEFEF"
    botonprob.style.color  = "black"
   if  (totalstickers <= 10 && totalstickers >=0){
    document.querySelector("#totalstickers").textContent = text1+totalstickers+" stickers." ;
    document.querySelector("#dataerror").textContent = "";
   }
   else{
       document.querySelector("#totalstickers").textContent = text1+totalstickers+" stickers.";
       document.querySelector("#dataerror").textContent = text2;
       botonprob.style.backgroundColor  = "red"
       botonprob.style.color  = "white"
   }})

   botonprob2.addEventListener("click", () =>{
    let vsticker1 = document.querySelector("#input01").value='';
    let vsticker2 = document.querySelector("#input02").value='';
    let vsticker3 = document.querySelector("#input03").value='';
    document.querySelector("#totalstickers").textContent = text3;
    document.querySelector("#dataerror").textContent = text4;
    botonprob.style.backgroundColor  = "#EFEFEF"
    botonprob.style.color  = "black"
})