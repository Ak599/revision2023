//gardient//
function list_gardients() {
    var xhr = new XMLHttpRequest();
    // paramétrage de la requête
    xhr.open('GET', 'http://localhost/tp_js/list_gardients.php');
    // écouteur de la réponse
    xhr.onload = function () {
    if (xhr.status === 200) {
    let response = xhr.responseText
    let donneeJson = JSON.parse(response)
    console.log(donneeJson);
    afficher(donneeJson);
    } else {
    console.log('Erreur : code=' + xhr.status);
    }
    };
    // envoie de la requête
    xhr.send();
   }
   function afficher(tab)
   {
    let ol=document.getElementById("pere")

    tab.forEach(function(tab)
    {
        let li =document.createElement('li')
        li.innerHTML=tab.id+''+tab.nom+''+tab.prenom;
        ol.appendChild(li);

    });
   }

   // milieux//
   function list_milieux() {
    var xhr = new XMLHttpRequest();
    // paramétrage de la requête
    xhr.open('GET', 'http://localhost/tp_js/list_milieux.php');
    // écouteur de la réponse
    xhr.onload = function () {
    if (xhr.status === 200) {
    let response = xhr.responseText
    let donneeJson = JSON.parse(response)
    console.log(donneeJson);
    her(donneeJson)
    } else {
    console.log('Erreur : code=' + xhr.status);
    }
    };
    // envoie de la requête
    xhr.send();
   }
   function her(tab)
   {
    let ol=document.getElementById("am")

    tab.forEach(function(tab)
    {
        let li =document.createElement('li')
        li.innerHTML=tab.id+''+tab.nom+''+tab.prenom;
        ol.appendChild(li);

    });
   }



   function list_defenseurs() {
    var xhr = new XMLHttpRequest();
    // paramétrage de la requête
    xhr.open('GET', 'http://localhost/tp_js/list_defenseurs.php');
    // écouteur de la réponse
    xhr.onload = function () {
    if (xhr.status === 200) {
    let response = xhr.responseText
    let donneeJson = JSON.parse(response)
    console.log(donneeJson);
    af(donneeJson)
    } else {
    console.log('Erreur : code=' + xhr.status);
    }
    };
    // envoie de la requête
    xhr.send();
   }
   function af(tab)
   {
    let ol=document.getElementById("aw")

    tab.forEach(function(tab)
    {
        let li =document.createElement('li')
        li.innerHTML=tab.id+''+tab.nom+''+tab.prenom;
        ol.appendChild(li);

    });
   }




   function list_attaquants() {
    var xhr = new XMLHttpRequest();
    // paramétrage de la requête
    xhr.open('GET', 'http://localhost/tp_js/list_attaquants.php');
    // écouteur de la réponse
    xhr.onload = function () {
    if (xhr.status === 200) {
    let response = xhr.responseText
    let donneeJson = JSON.parse(response)
    console.log(donneeJson);
    ficher(donneeJson);

    } else {
    console.log('Erreur : code=' + xhr.status);
    }
    };
    // envoie de la requête
    xhr.send();
   }
   function ficher(tab)
   {
    let ol=document.getElementById("pi")

    tab.forEach(function(tab)
    {
        let li =document.createElement('li')
        li.innerHTML=tab.id+' '+tab.nom+' '+tab.prenom;
        ol.appendChild(li);

    });
   }
   
