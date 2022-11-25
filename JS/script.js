$(document).ready(function(){
    $("#barras").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        }
        else{
            $("#menu").addClass("menu-ativo")
        }
    })
})



function cadastrar(){
    let email = document.getElementById("email").value
    alert(email)
}

function mostrarMenu($event){
    //identificar o elemento do menu
    let menu = document.getElementById("menu")
    //mudar visualização do menu

    //if(menu.style.display == "none")
    if (getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }
    

    event.preventDefault();
}