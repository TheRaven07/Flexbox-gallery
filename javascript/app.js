// modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("imgModal");
const images = document.querySelectorAll(".img-gallery");
const close = document.getElementById("close");


for(let i = 0; i <= images.length; i++){
    images[i].addEventListener("click", openImg);
     // Funcion ----Show img----
    function openImg(){
        modal.style.display = "block";
        modalContent.src = this.src;
    };
    //Cerrar ----Close img----
    let span = document.getElementById("close");
    span.addEventListener("click", closex);
    //Funcion
    function closex(e){
        if(e.target.classList.contains("close")){
            modal.style.display = "none";
        };
    }
}