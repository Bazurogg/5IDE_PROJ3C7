
// TEXT SHAKERS =============================================]

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const textElements = document.querySelectorAll(".morph_text");

textElements.forEach(element => {

    element.onmouseover = event => {

        event.target.style.cursor = "default"; // Change le curseur au survol

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

// TEXT SHAKERS =============================================]




// MESSAGE EXTENDS =============================================]

const tooltipContainers = document.querySelectorAll('.tooltip-container');

tooltipContainers.forEach(container => {
    
    const icon = container.querySelector('.pulse_icon'); // L'icône qui déclenche l'animation
    const tooltipText = container.querySelector('.tooltip-text'); // Texte à révéler

    const expandContainer = () => {
        container.classList.add('expanded'); // Ajoute la classe pour élargir le conteneur
        container.classList.add('hideseek');

        tooltipText.style.opacity = "1";
        icon.style.translate = "20px"
    };

    const collapseContainer = () => {
        container.classList.remove('expanded'); // Retire la classe pour rétrécir le conteneur
        container.classList.remove('hideseek');

        tooltipText.style.opacity = "0";
    };

    // Survol de l'icône
    icon.addEventListener('mouseover', expandContainer);
    icon.addEventListener('mouseout', collapseContainer);

    // Survol du texte
    tooltipText.addEventListener('mouseover', expandContainer);
    tooltipText.addEventListener('mouseout', collapseContainer);
    

});




