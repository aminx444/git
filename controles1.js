
function test() {
    var nomPrenom = document.getElementById("nomPrenom").value;
    var adresse = document.getElementById("adresse").value;
    var menu = document.getElementById("menu").value;
    var quantite = document.getElementById("quantite").value;

    if (nomPrenom === "" || adresse === "" || menu === "choisir le plat" || quantite === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    } else {
        alert("Formulaire envoyé avec succès!");
        return true;
    }
}


function annuler() {
    document.getElementById("commandeForm").reset();
    alert("Formulaire annulé.");
}
window.onload = function() {
    const commande = JSON.parse(localStorage.getItem("commande"));

    if (commande) {
        document.getElementById("factureDetails").innerHTML = `
            <p><strong>Nom et Prénom :</strong> ${commande.nomPrenom}</p>
            <p><strong>Adresse :</strong> ${commande.adresse}</p>
            <p><strong>Menu Commandé :</strong> ${commande.menu}</p>
            <p><strong>Quantité :</strong> ${commande.quantite}</p>
            <p><strong>Prix Total :</strong> ${commande.prixTotal} €</p>
        `;
    } else {
        document.getElementById("factureDetails").innerHTML = "<p>Aucune commande trouvée.</p>";
    }
}
