//Fecha
const fecha = new Date();
const mesActual = fecha.getMonth();
const hoy = fecha.getDate();
const contenedor = document.getElementById("cont");
let dia_mes =( hoy + "/" + mesActual );
h2_contenedor = document.createElement("h2");
h2_contenedor.setAttribute("id", "fecha");
let texto = document.createTextNode(dia_mes);
h2_contenedor.appendChild(texto);
contenedor.appendChild(h2_contenedor);
//Nombre
let nombre_etiqueta = document.getElementById("Nombre-JS");
let nombre = localStorage.getItem("usuario");
let auth = localStorage.getItem("sesion")
console.log(auth)
if (auth == "SI") {
    console.log("fsdfdsfgf")
    nombre_etiqueta.innerHTML = "Hola " + nombre; 
}
else
    if(auth == "NO"){
    nombre_etiqueta.innerHTML = " "
}
