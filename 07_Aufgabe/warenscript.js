"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let localArray = JSON.parse(localStorage.getItem("Artikel"));
    let korb = document.getElementById("korb");
    let summe = JSON.parse(localStorage.getItem("Summe"));
    let gesamtpreis = document.getElementById("gesamtpreis");
    summe = JSON.parse(localStorage.getItem("Summe"));
    let gerundet = summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
    gesamtpreis.innerHTML = gerundet;
    for (let i = 0; i < localArray.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "artikel");
        let name = document.createElement("h2");
        name.innerHTML = localArray[i]._name;
        div.appendChild(name);
        let image = document.createElement("img");
        image.setAttribute("src", localArray[i]._bild);
        image.setAttribute("class", "bild");
        div.appendChild(image);
        let descrip = document.createElement("p");
        descrip.innerHTML = localArray[i]._beschreibung;
        div.appendChild(descrip);
        let price = document.createElement("p");
        price.setAttribute("class", "preis");
        price.innerHTML = "" + localArray[i]._preis + "€  ";
        div.appendChild(price);
        let button = document.createElement("button");
        button.setAttribute("id", "entfernenButton");
        button.innerText = "Entfernen";
        price.appendChild(button);
        button.setAttribute("stelle", "" + i);
        button.setAttribute("preis", "" + localArray[i]._preis);
        button.addEventListener("click", handleEntfernen);
        function handleEntfernen() {
            let index = parseFloat(button.getAttribute("stelle"));
            localArray.splice(index, 1);
            localStorage.setItem("Artikel", JSON.stringify(localArray));
            let preis = parseFloat(button.getAttribute("preis"));
            let neueSumme = summe - preis;
            localStorage.setItem("Summe", JSON.stringify(neueSumme));
            window.location.reload();
        }
        korb.appendChild(div);
    }
    let deleteAll = document.getElementById("deleteAll");
    deleteAll.addEventListener("click", handleDeleteAll);
    function handleDeleteAll() {
        localStorage.clear();
        window.location.reload();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenscript.js.map