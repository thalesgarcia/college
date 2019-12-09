$('.menu-principal_btn').click(function() {
    let aux= document.getElementById("nav");
    console.log(aux);
    aux.classList.toggle('menu-principal-closed');
    document.documentElement.classList.toggle('active_menu');
});

// $('.close_menu').click(function() {
//     document.documentElement.classList.remove('active_menu');
// });


document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        let aux= document.getElementById("nav");
        console.log("asd",aux);
        aux.classList.toggle('menu-principal-closed');
        document.documentElement.classList.remove('active_menu');
    }
};