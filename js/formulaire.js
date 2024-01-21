let form = document.querySelector("form");

/* Container de succès et d'erreur */
let errContainer = document.querySelector(".message-error");
let errList = document.querySelector(".message-error ul");
let successContainer = document.querySelector(".message-success");

errList.innerHTML = "";
errContainer.classList.remove("visible");
successContainer.classList.remove("visible");

/* importation des champs formulaire */
let email = document.querySelector("#email");
let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let problem = document.querySelector("#problem");

let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])"
);

form.addEventListener("submit", (event) => 
{   
    event.preventDefault();

    /* Gestion des erreurs emails */
    if(email.value == "")
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ email ne peut pas être vide";
    
        errList.appendChild(err);
    }
    else 
    {
        email.classList.add("success");
    }

    /* Gestion des erreurs noms */
    if(nom.value == "")
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ nom ne peut pas être vide";
    
        errList.appendChild(err);
    }
    else 
    {
        nom.classList.add("success");
    }

    /* Gestion des erreurs prénoms */
    if(prenom.value == "")
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ prenom ne peut pas être vide";
    
        errList.appendChild(err);
    }
    else 
    {
        prenom.classList.add("success");
    }

    /* Gestion des erreurs problèmes */
    if(problem.value.length < 10)
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ problème ne peut pas être vide ou doit contenir minimum 10 caractères.";
    
        errList.appendChild(err);
    }
    else 
    {
        problem.classList.add("success");
    }

    /* Gestion de quand tout va bien */
    if(
        nom.classList.contains("success") &&
        prenom.classList.contains("success") &&
        email.classList.contains("success") &&
        problem.classList.contains("success")
    ) {
        successContainer.classList.add("visible");
    }
})
