"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let counter = [];
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
            button.addEventListener("click", handleMenge);
            function handleMenge() {
                document.getElementById("anzahl")?.remove();
                let menge = document.createElement("div");
                menge.setAttribute("id", "anzahl");
                document.getElementById("circle")?.appendChild(menge);
                let inhalt = document.createElement("P");
                menge.appendChild(inhalt);
                counter.push(arr[i]._preis);
                let gesamt = 0;
                for (let i = 0; i < counter.length; i++) {
                    gesamt = gesamt + counter[i];
                }
                console.log("Summe:" + gesamt.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                inhalt.innerHTML = "" + counter.length;
            }
            let dokumentDiv = document.getElementById(docDiv);
            dokumentDiv.appendChild(div);
        }
    }
    laden(Aufgabe06.natuerliche, "natuerliche");
    laden(Aufgabe06.essbare, "essbare");
    laden(Aufgabe06.spielbare, "spielbare");
    let natu = document.getElementById("natu");
    natu.addEventListener("click", handleNatu);
    let ess = document.getElementById("ess");
    ess.addEventListener("click", handleEss);
    let spiel = document.getElementById("spiel");
    spiel.addEventListener("click", handleSpiel);
    let all = document.getElementById("all");
    all.addEventListener("click", handleAll);
    function handleNatu() {
        let ess = document.getElementById("essbare");
        ess.style.display = "none";
        let spiel = document.getElementById("spielbare");
        spiel.style.display = "none";
        let natu = document.getElementById("natuerliche");
        natu.style.display = "flex";
        let nue = document.getElementById("ank1");
        nue.hidden = false;
        let eue = document.getElementById("ank2");
        eue.hidden = true;
        let sue = document.getElementById("ank3");
        sue.hidden = true;
    }
    function handleEss() {
        let ess = document.getElementById("essbare");
        ess.style.display = "flex";
        let spiel = document.getElementById("spielbare");
        spiel.style.display = "none";
        let natu = document.getElementById("natuerliche");
        natu.style.display = "none";
        let nue = document.getElementById("ank1");
        nue.hidden = true;
        let eue = document.getElementById("ank2");
        eue.hidden = false;
        let sue = document.getElementById("ank3");
        sue.hidden = true;
    }
    function handleSpiel() {
        let ess = document.getElementById("essbare");
        ess.style.display = "none";
        let spiel = document.getElementById("spielbare");
        spiel.style.display = "flex";
        let natu = document.getElementById("natuerliche");
        natu.style.display = "none";
        let nue = document.getElementById("ank1");
        nue.hidden = true;
        let eue = document.getElementById("ank2");
        eue.hidden = true;
        let sue = document.getElementById("ank3");
        sue.hidden = false;
    }
    function handleAll() {
        let ess = document.getElementById("essbare");
        ess.style.display = "flex";
        let spiel = document.getElementById("spielbare");
        spiel.style.display = "flex";
        let natu = document.getElementById("natuerliche");
        natu.style.display = "flex";
        let nue = document.getElementById("ank1");
        nue.hidden = false;
        let eue = document.getElementById("ank2");
        eue.hidden = false;
        let sue = document.getElementById("ank3");
        sue.hidden = false;
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map