"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    function laden(arr, docDiv) {
        for (let i = 0; i < arr.length; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "artikel");
            let name = document.createElement("h2");
            name.innerHTML = arr[i]._name;
            div.appendChild(name);
            let image = document.createElement("img");
            image.setAttribute("src", arr[i]._bild);
            image.setAttribute("class", "bild");
            div.appendChild(image);
            let descrip = document.createElement("p");
            descrip.innerHTML = arr[i]._beschreibung;
            div.appendChild(descrip);
            let price = document.createElement("p");
            price.setAttribute("class", "preis");
            price.innerHTML = "" + arr[i]._preis + "€  ";
            div.appendChild(price);
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.innerText = "Kaufen";
            price.appendChild(button);
            let dokumentDiv = document.getElementById(docDiv);
            dokumentDiv.appendChild(div);
        }
    }
    laden(Aufgabe05.natuerliche, "natuerliche");
    laden(Aufgabe05.essbare, "essbare");
    laden(Aufgabe05.spielbare, "spielbare");
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map