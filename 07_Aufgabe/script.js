"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let counter = [];
    let artikelArray = [];
    let natuerliche = document.getElementById("natuerliche");
    let essbare = document.getElementById("essbare");
    let spielbare = document.getElementById("spielbare");
    async function laden(_url) {
        let antwort = await fetch(_url);
        let body = await antwort.json();
        for (let i = 0; i < body.length; i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "artikel");
            if (body[i]._kategorie == "natuerliche") {
                natuerliche.appendChild(div);
            }
            if (body[i]._kategorie == "essbare") {
                essbare.appendChild(div);
            }
            if (body[i]._kategorie == "spielbare") {
                spielbare.appendChild(div);
            }
            let name = document.createElement("h2");
            name.innerHTML = body[i]._name;
            div.appendChild(name);
            let image = document.createElement("img");
            image.setAttribute("src", body[i]._bild);
            image.setAttribute("class", "bild");
            div.appendChild(image);
            let descrip = document.createElement("p");
            descrip.innerHTML = body[i]._beschreibung;
            div.appendChild(descrip);
            let price = document.createElement("p");
            price.setAttribute("class", "preis");
            price.innerHTML = "" + body[i]._preis + "€  ";
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
                artikelArray.push(body[i]);
                localStorage.setItem("Artikel", JSON.stringify(artikelArray));
                counter.push(body[i]._preis);
                let gesamt = 0;
                for (let i = 0; i < counter.length; i++) {
                    gesamt = gesamt + counter[i];
                }
                localStorage.setItem("Summe", gesamt.toString());
                //localStorage.setItem("Summe", JSON.stringify(gesamt.toLocaleString("de-DE", { "currency": "EUR", "style": "currency"})));
                //console.log("Summe:" + gesamt.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                inhalt.innerHTML = "" + counter.length;
            }
        }
    }
    laden("artikel.json");
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
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map