burger=document.querySelector(".burger")
nav=document.querySelector(".navi")
navh=document.querySelector(".hnav")
burger.addEventListener("click",()=>{
    // nav.classList.toggle("vnav")
    navh.classList.toggle("hnav")
})

function kl(){
    // let b=document.getElementById("hola")
    let b=document.getElementById("hol")
    let b1=document.getElementById("hola")
    let para=document.getElementById("mor")
    if(para.style.display !="none"){
        para.style.display='none';
        b.style.display="none"
        b1.style.display="block"

        
        


    }
    else{
        para.style.display="block";
        b.style.display="block"
        b1.style.display="none"
        
    }
}