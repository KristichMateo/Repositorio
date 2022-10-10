lista = []
boton = document.getElementById("boton-aleatorio")

boton.addEventListener("click", a=>{
    div_Padre = document.getElementById("contenedor") 

    lista.unshift(document.querySelector(".noticia").href);
    lista.unshift(document.querySelector(".noticia1").href);
    lista.unshift(document.querySelector(".noticia2").href);
    lista.unshift(document.querySelector(".noticia3").href);

    const aleatorio = lista[Math.floor(Math.random() * lista.length)];
    div_contenedor = document.createElement("div")
    div_contenedor.setAttribute("id", "divs")
    div_contenedor.setAttribute("class","col-xxl-8 col-xl-8 col-lg-8 col-md-10 col-sm-12")
    div_Padre.appendChild(div_contenedor)
    elemento_h4 = document.createElement("h4")
    elemento_h4.setAttribute("id", "Link")
    div_contenedor.appendChild(elemento_h4)
    elemento_a = document.createElement("a")
    elemento_a.setAttribute("href", aleatorio)
    elemento_a.setAttribute("id", "nada")
    elemento_h4.appendChild(elemento_a)
    elemento_a.innerHTML ="Noticia secreta"
    
    
})
