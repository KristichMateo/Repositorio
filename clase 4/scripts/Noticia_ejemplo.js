let boton = document.getElementById("boton");
let titulo = document.getElementById("titulo");
let imagen = document.getElementById("imag");
let url = window.location;
boton.addEventListener("click", guardar);
let titulo_guardar = titulo.innerHTML;
let imagen_guardar = imagen.src;
console.log(titulo_guardar)
console.log(imagen_guardar)
function guardar() {
    alert("noticia guardada")
    localStorage.setItem("titulo",titulo_guardar)
    localStorage.setItem("imagen",imagen_guardar)
    localStorage.setItem("url",url)
}

