document.addEventListener("DOMContentLoaded", function () {
    // SELECIONA TODOS OS LINKS DO MENU
    const menuLinks = document.querySelectorAll('.navbar ul li a');

    // ADICIONA EVENTO NO CLICK DO MENU
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // REALIZA O SCROLL SUAVE ATÉ O LOCAL 
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // 
            });
        });
    });
});
