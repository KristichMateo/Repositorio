
let campo = document.getElementById("exampleInputEmail1");
let subir = document.getElementById("boton");
let beneficios = document.getElementById("beneficios");
let beneficios1 = document.getElementById("beneficios1");
let cerrar_boton = document.getElementById("cerrar")
subir.addEventListener("click",inicio_sesion);
campo.addEventListener("change",evento1)
cerrar_boton.addEventListener("click",cerrar_sesion)
let user = document.getElementById("usuario");
let nombre = campo.value;
function evento1() {
    nombre = campo.value;
    console.log(nombre);
}

function inicio_sesion() {
    console.log(nombre);
    localStorage.setItem('usuario', nombre);
    localStorage.setItem('sesion', "SI");
    let usernme = localStorage.getItem("usuario");
    console.log(usernme);
    usuario.innerHTML = "Hola " + usernme;
    beneficios.innerHTML = "Gracias por haber inicido sesión."
    beneficios1.innerHTML = " "
}
function cerrar_sesion() {
    localStorage.clear();
    beneficios.innerHTML = "!Obten beneficios inigualables¡"
    beneficios1.innerHTML = "Inicia sesión y accede a noticias de ultimo momento"
    usuario.innerHTML = " "
    localStorage.setItem('sesion', "NO");
}