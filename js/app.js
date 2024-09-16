
//Creamos constantes de los enlaces, la modal y las imágenes
const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");

//Al hacer click en cada clase, se "abre" la clase modal (se pone visible)
enlaces.forEach((enlace, i) => {
    enlace.addEventListener("click", evento => {
        evento.preventDefault();
        imgModal.setAttribute("src",enlace.getAttribute("href"));
        modal.classList.add("visible");
    });
});

//Al hacer click en la modal (en cualquier parte), se "cierra" la clase modal
modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});



//Creamos una constante que al hacer click en los botones nos tiene que llevar a la imagen de adelante o de detrás
const botones = document.querySelectorAll(".modal button");
let imgActual = 0; //Cada vez que se haga click se da valor a esa imagen

botones.forEach((boton,i) => {
    boton.addEventListener("click", evento => {
        evento.stopPropagation();
        if(i == 0){ //Carrusel de imagenes activo
            imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1; 
        }
        else{
            imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
        }
        imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));      
    });
});

    