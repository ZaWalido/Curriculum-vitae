/* tableau qui contient les liens de la barre NAV */
lienMenu = document.querySelectorAll('nav ul li');
/* tableau qui contient les Ã©crans de ma page */
ecranAffiche = document.querySelectorAll('.ecran');
for (let i=0; i<lienMenu.length; i++) {
 lienMenu[i].addEventListener('click',
 function(){positionnerEcran(i);});
 lienMenu[i].addEventListener('mouseover',
function(){changerCurseur(i);});
}
// Fonctions
function positionnerEcran(numEcran) {
 ecranAffiche[numEcran].scrollIntoView(
 {block: 'end',
 inline: 'start',
 behavior: 'smooth'}
 );
}
function changerCurseur(numLien)
{
 lienMenu[numLien].style.cursor = 'pointer';
}

// Ici c'est le code pour 
var lemessage = document.getElementById('result-form');
var nom = document.getElementById("nom");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var message = document.getElementById("message");
window.onload = function() {
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault();
// these IDs from the previous steps
emailjs.sendForm('service_7x8jgnd', 'template_p2o07e8', this)
.then(function() {
console.log('SUCCESS!');
success();
}, function(error) {
console.log('FAILED...', error);
failed();
});
});
}
function success(){
    // message pour l'utilisateur
    lemessage.innerHTML ="Message envoyé ! <br>Nous vous recontacterons dès que possible.";
    //suppression du contenu des champs du formulaire
    nom.value = "";
    email.value = "";
    telephone.value = "";
    message.value = "";
    }
    function failed(){
    lemessage.style.color = 'red';
    lemessage.innerHTML ="Une erreur s'est produite,<br>veuillez réessayer.";
    }
    