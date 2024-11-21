function annuler(){
    document.getElementById("commandeForm").reset();
}
function test(){
    np=document.getElementById("nomPrenom").value;
    ad=document.getElementById("adresse").value;
    me=document.getElementById("menu").value;
    qu=document.getElementById("quantite").value;
    if(np == "")
        alert("il faut ecrire le  nom et prenom ")
    else if(ad == "") 
        alert("il faut ecrire l'adresse ")
     else if(me == "choisir le plat") 
        alert("il faut choisir le menu ")
    else if(qu == "") 
        alert("il faut introduire le quantite ")


