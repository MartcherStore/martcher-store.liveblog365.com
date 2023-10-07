// alert("DANGER!!!");

//let prenom;
//prenom= prompt("votre nom?");
//alert(prenom);
//console.log(prenom);
/* let age = Number(prompt("quel est votre age ?"));
if(age<=17){
   alert("vous etes mineur");
}
else if(age==18){
    alert("vous venez d'etre majeur");
}
else {
    alert("vous etes majeur");
} */
window.addEventListener("DOMContentLoaded", (event)=> {
    document.getElementById("loader").style.top = "-100vh";
    console.log("DOM entierement charge et analyse");
    setTimeout(function() {
        document.getElementById("loader").style.top ="-100vh";
    }, 1000)
 
    inputs = document.querySelectorAll("input:not(input[type=\"submit\"]), textarea");
    
    inputs.forEach(e => {
        e.addEventListener("click", function () {
            inputs.forEach(e => {
                e.style.borderBottom = "2px solid #FF7E7E";
            });
             e.style.borderBottom = "2px solid black";
        })
    })

})
function display_modal() {
    document.getElementById("modal").style.display="block"
}