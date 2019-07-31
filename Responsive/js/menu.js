$('.open_menu').click(function() {
    document.documentElement.classList.add('active_menu');
});

$('.close_menu').click(function() {
    document.documentElement.classList.remove('active_menu');
});


document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('active_menu');
    }
};