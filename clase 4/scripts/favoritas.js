let titulo = localStorage.getItem("titulo");
let imagen_src = localStorage.getItem("imagen");
let url = localStorage.getItem("url")
let div_contenedor = document.getElementById("contenedor");
let div_noticia = document.createElement("div");
let div_cuerpo = document.createElement("div");
let h3_titulo = document.createElement("h3");
let imagen = document.createElement("img");
let boton = document.createElement("a")
h3_titulo.setAttribute("class","card-text")
h3_titulo.innerHTML = titulo;
imagen.setAttribute("src",imagen_src);
imagen.setAttribute("class","card-img-top")
boton.setAttribute("class","btn btn-primary")
div_noticia.setAttribute("class","card")
div_noticia.setAttribute("style","width: 18rem;")
boton.setAttribute("class","btn btn-primary")
boton.innerHTML = "Ir a noticia"
boton.setAttribute("href",url)
div_cuerpo.appendChild(h3_titulo)
div_cuerpo.appendChild(boton)
div_noticia.appendChild(imagen);
div_noticia.appendChild(div_cuerpo);

div_contenedor.appendChild(div_noticia);