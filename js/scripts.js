/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

// ===========================================
// Formulaire de contact
// ===========================================

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", async function (e) {

       console.log("SUBMIT INTERCEPTE");
        
        e.preventDefault();

        const button = document.getElementById("submit-btn");
        const text = document.getElementById("btn-text");
        const spinner = document.getElementById("spinner");

        spinner.style.display = "inline-block";

        text.innerHTML = "Envoi en cours...";

        button.classList.add("loading");

        const data = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: "POST",

                body: data,

                headers: {
                    Accept: "application/json"
                }

            });

            spinner.style.display = "none";

            if (response.ok) {

                form.reset();

                button.classList.remove("loading");

                button.classList.remove("btn-primary");

                button.classList.add("btn-success");

                text.innerHTML = "✅ Votre message a bien été envoyé";

                setTimeout(() => {

                    button.classList.remove("btn-success");
                    button.classList.add("btn-primary");

                    text.innerHTML = "Envoyer";

                }, 5000);

            }

        }

        catch (error) {

            spinner.style.display = "none";

            button.classList.remove("loading");

            text.innerHTML = "Erreur lors de l'envoi";

        }

    });

}
    
});
