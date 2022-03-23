/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare
le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
(animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo
dinamico: generare in modo casuale un codice colore, sapendo che la notazione
esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi
tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */

// ~~~~~~~~~~ START FUNCTIONS ~~~~~~~~~~
// funzione per generare la struttura html della card
function createBox(elements) {
    // creo il mio div
    let box = document.createElement("div");
    // gli attribuisco delle classi già preparate da me in precedenza
    box.classList.add("col-sm-3", "col-md-2", "py-4", "text-center", "rounded-3");
    // inserisco il restante contenuto con innerHTML
    box.innerHTML = `
    <div>
        <i style="color: ${elements.color};" class="${elements.family} fa-2x ${elements.prefix}${elements.name}"></i>
    </div>
    <div>
        <p>${elements.name}</p>
    </div>`
    // inserisco il tutto nell'html
    container.appendChild(box);
}

// funzione che mi genera tante card quanti sono gli oggetti nell'array 
function generationIcons(arrayObj) {
    arrayObj.forEach((elements) => createBox(elements));
}

// funzione che mi filtra per tipo le icone
function filterIcons(arrayObj, value) {
    return arrayObj.filter((icone) => icone.type === value)
}

// funzione che mi crea gli elementi option da inserire nel select
function creationOption(elementValue) {
    // creo il mio tag option
    let option = document.createElement("option");
    // setto l'attributo con il valore opportuno
    option.setAttribute("value", `${elementValue}`);
    // inserico il nome della option
    option.innerText = `${elementValue}`;
    // inserisco tutto nel select
    choices.appendChild(option);
}
// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

// creo una variabile per l'elemento html dove andare a inserire le card
const container = document.getElementById("row_icons");
// creo una variabile per selezionare il select
const choices = document.getElementById("icons");
// creo un array da cui andare a prendere i valori delle mie option
const arrayOptionValue = ["all", "animal", "vegetable", "user"]

// genero di default sempre tutte le icone
generationIcons(arrayIcons);

// aggiungo un EventListener al cambio della selezione
choices.addEventListener("change", (event) => {
    // resetto il tutto per sicurezza
    container.innerHTML = "";
    // in base alla selezione vado a mandare a schermo un set di icone differente
    let verify = event.target.value;
    if (verify === "all") {
        generationIcons(arrayIcons);
    } else {
        let value = filterIcons(arrayIcons, verify);
        generationIcons(value);
    }

});

// ciclo in base agli elementi degli array della selection
arrayOptionValue.forEach(elementValue => creationOption(elementValue))