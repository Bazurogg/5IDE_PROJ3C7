const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const textElements = document.querySelectorAll(".morph_text");

textElements.forEach(element => {

    element.onmouseover = event => {

        animateText(event.target, event.target.dataset.value, () => {

            // Après l'affichage complet, démarre le remélange après 2 secondes
            setTimeout(() => {

                animateText(event.target, generateRandomText(event.target.dataset.value.length));

            }, 3500);

        });

    };

});

// Fonction d'animation pour afficher un texte cible progressivement
function animateText(element, targetText, callback) {

    let iterations = 0;

    const interval = setInterval(() => {

        element.innerText = targetText.split("").map((letter, index) => {

            if (index < iterations) {
                return targetText[index]; // Lettre cible fixe
            }

            return letters[Math.floor(Math.random() * 26)]; // Lettre aléatoire

            }).join("");

        if (iterations >= targetText.length) {

            clearInterval(interval);

            if (callback) callback(); // Exécute la fonction de rappel si elle existe

        }

        iterations += 1 / 3; // Contrôle la vitesse d'affichage

    }, 30);

}

// Fonction pour générer un texte composé de lettres aléatoires
function generateRandomText(length) {

    return Array.from({ length }).map(() => letters[Math.floor(Math.random() * 26)]).join("");
    
}
