let tabContent = document.querySelectorAll('.tab-content');
let tabTitre = document.querySelectorAll('.tab');

/* Changement des tabs */
tabTitre.forEach((element) => {
    element.addEventListener('click',() => {

        tabTitre.forEach((event) => {
            event.classList.remove('active');
        })

        tabContent.forEach((event) => {
            event.classList.remove('tab-active');
        })

        element.classList.add('active');

        if(element.classList.contains('tab-rapide')) {
            document.querySelector('.rapide').classList.add('tab-active')
        }
        if(element.classList.contains('tab-familial')) {
            document.querySelector('.familial').classList.add('tab-active')
        }
        if(element.classList.contains('tab-terrain')) {
            document.querySelector('.terrain').classList.add('tab-active')
        }
    })

});