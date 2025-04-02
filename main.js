// Funzione per scrollare alla sezione
function scrollToSection(sectionId) {
    // Trova l'elemento della sezione
    const section = document.getElementById(sectionId);
    // Usa il metodo scrollIntoView per un effetto di scroll fluido
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Funzione per evidenziare la voce di menu attiva
function highlightMenu() {
    const sections = document.querySelectorAll('section'); // Seleziona tutte le sezioni
    const navLinks = document.querySelectorAll('nav ul li'); // Seleziona tutti i link della navbar

    let scrollPosition = window.scrollY + 1; // Posizione dello scroll (un quarto della finestra)

    sections.forEach((section, index) => {
        // Se la sezione è visibile nella finestra di visualizzazione
        if (
            scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            // Rimuove la classe active da tutti i link
            navLinks.forEach(link => link.classList.remove('active'));
            // Aggiunge la classe active al link corrispondente
            navLinks[index].classList.add('active');
        }
    });
}

// Aggiungere un ascoltatore per l'evento di scroll per evidenziare la voce attiva
window.addEventListener('scroll', highlightMenu);

// Inizializzare la navbar quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', highlightMenu);


// Modifica navbar dopo scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {  // Quando l'utente ha iniziato a scrollare
        navbar.classList.add('scrolled');  // Aggiungi la classe 'scrolled'
    } else {
        navbar.classList.remove('scrolled');  // Rimuovi la classe 'scrolled' quando torna in cima
    }
});
