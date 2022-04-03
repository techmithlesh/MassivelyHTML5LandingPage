const ham = document.querySelector('.ham');
const close = document.querySelector('.close');


ham.addEventListener("click", () => {
    show();
})

function show(){
    document.querySelector('.mobilemenucontainer').style.display= "flex";
    document.querySelector('.mobilemenucontainer').style.transition= "2s ease-in";
    document.querySelector('.close').style.display = "flex";

}

close.addEventListener("click", () =>{
    document.querySelector('.mobilemenucontainer').style.display = "none";
    document.querySelector('.close').style.display = "none";
})