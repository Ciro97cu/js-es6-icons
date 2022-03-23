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

function createBox(elements) {
    let box = document.createElement("div");
    box.classList.add("col-2", "py-4", "text-center", "rounded-3");
    box.innerHTML = `
        <div>
            <i class="${elements.family} fa-2x ${elements.prefix}${elements.name} ${elements.color}"></i>
        </div>
        <div>
            <p>${elements.name}</p>
        </div>`
    container.appendChild(box);
}

const container = document.getElementById("row_icons");

let choices = document.getElementById("icons");

choices.addEventListener("change", (event) => {

    container.innerHTML = "";

    if (event.target.value === "all") {
        arrayIcons.forEach((elements) => createBox(elements));
    } else if (event.target.value === "animal") {
        arrayIcons.filter((icone) => icone.type === "animal").forEach((elements) => createBox(elements));
    } else if (event.target.value === "vegetable") {
        arrayIcons.filter((icone) => icone.type === "vegetable").forEach((elements) => createBox(elements));
    } else {
        arrayIcons.filter((icone) => icone.type === "user").forEach((elements) => createBox(elements));
    }

});

arrayIcons.forEach((elements) => createBox(elements));