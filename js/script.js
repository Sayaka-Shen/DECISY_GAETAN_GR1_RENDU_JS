let closeMark = document.querySelector(".closeMark");
let menuHamburger = document.querySelector(".menuHamburger");
let nav = document.querySelector("ul");

let header = document.querySelector("header");

/* Menu Ouvrant et Fermant/Menu Burger */
menuHamburger.addEventListener("click", () => { 
    nav.classList.toggle("flex");
})


closeMark.addEventListener("click", () => { 
    nav.classList.toggle("flex");    
})


/* Slider sans librairie */
let imgArray = ["./img/car_background.jpg", "./img/car_background2.jpg", "./img/car_background3.jpg"];

let indexImg = 0;
header.style.backgroundImage = `url(${imgArray[indexImg]})`;

setInterval(() => {
    if(indexImg < imgArray.length)
    {
        indexImg++;

        header.style.backgroundImage = `url(${imgArray[indexImg]})`;
        
        if(indexImg === imgArray.length) 
        {
            indexImg = 0;

            header.style.backgroundImage = `url(${imgArray[indexImg]})`;
        }
    }  
}, 8000);

/* Bouton Dark Mode into Light Mode */
let buttonDarkMode = document.querySelector(".buttonDarkMode");

buttonDarkMode.addEventListener("click", () => 
{
    if(buttonDarkMode.innerHTML == "Light Mode")
    {
        buttonDarkMode.innerHTML = "Dark Mode";
    }
    else 
    {
        buttonDarkMode.innerHTML = "Light Mode";
    }

    document.body.classList.toggle("dark");
})



