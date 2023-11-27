function get_agents() {
    fetch('http://localhost/projet2_php/list_etudiant.php')
    // transformation de la réponse sous format JSON
    .then(response => response.json())
    // Traitement après réponse
    .then((data) => {
    console.log(data)
    aficher(data)

    })
    // en cas d'erreur
    .catch(error => console.error(error));
   }
   get_agents()
   function aficher(tab)
   {
    let ol=document.getElementById("res")
    tab.forEach(  function(etudiant)
    {
        let li=document.createElement("li")
        li.innerHTML=etudiant.prenom
        ol.appendChild(li)

    });
   }