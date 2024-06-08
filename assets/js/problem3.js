const boton = document.querySelector("#btnprob3");
const text1 = "Por favor ingresa una contraseña";

window.addEventListener("load", (event)=> {
    let select01 = document.querySelector("#selectprob31").value;
    let select02 = document.querySelector("#selectprob32").value;
    let select03 = document.querySelector("#selectprob33").value;
    if (select01 === "cero"&&select02==="cero"&&select03==="cero"){
    document.querySelector("#parrafoprob3").textContent = "Por favor ingresa una contraseña";
    boton.style.backgroundColor  = "#EFEFEF"
    boton.style.color  = "black"
    }
})


boton.addEventListener("click", () => {
    let select01 = document.querySelector("#selectprob31").value;
    let select02 = document.querySelector("#selectprob32").value;
    let select03 = document.querySelector("#selectprob33").value;
    /* document.querySelector("#parrafoprob3").textContent = text1; */
    if (select01 === "nueve"&&select02==="uno"&&select03==="uno"){
    document.querySelector("#parrafoprob3").textContent = "Password 1 correcto";
    boton.style.backgroundColor  = "green"
    boton.style.color  = "white"
    }
    else if (select01 === "siete"&&select02==="uno"&&select03==="cuatro"){
        document.querySelector("#parrafoprob3").textContent = "Password 2 correcto";
        boton.style.backgroundColor  = "green"
        boton.style.color  = "white"
    }
    else {
        document.querySelector("#parrafoprob3").textContent = "Password incorrecto";
        boton.style.backgroundColor  = "red"
        boton.style.color  = "white"
    }

/*     if (select01=== "nueve" && select02=== "uno" && select03==="uno"){
        document.querySelector("#parrafoprob3").textContent = "Password 3 correcto";
    }
    if (select01=== "siete" && select02=== "uno" && select03==="cuatro"){
        document.querySelector("#parrafoprob3").textContent = "Password 2 correcto";
    }else {
        document.querySelector("#parrafoprob3").textContent = "Password incorrecto";
    } */
})

/* boton.addEventListener("click", () =>{
    let select01 = document.querySelector("#selectprob31").value;
    let select02 = document.querySelector("#selectprob32").value;
    let select03 = document.querySelector("#selectprob33").value;
    document.querySelector("#totalstickers").textContent = text3;
    document.querySelector("#dataerror").textContent = text4;
    boton.style.backgroundColor  = "#EFEFEF"
    boton.style.color  = "black"
})
 */
