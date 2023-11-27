function get_agents_ajax() {
    var xhr = new XMLHttpRequest();
    // paramétrage de la requête
    xhr.open('GET', 'http://localhost/projet1/backend/index.php');
    // écouteur de la réponse
    xhr.onload = function () {
    if (xhr.status === 200) {
    let response = xhr.responseText
    let donneeJson = JSON.parse(response)
    console.log(donneeJson);
    } else {
    console.log('Erreur : code=' + xhr.status);
    }
    };
    // envoie de la requête
    xhr.send();
   }
