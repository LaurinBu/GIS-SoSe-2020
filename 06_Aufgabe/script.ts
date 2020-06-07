namespace Aufgabe06 {

    let counter: number[] = [];

    function laden(arr: Artikel[], docDiv: string): void {
    
    for (let i: number = 0; i < arr.length; i++) {

        let div: HTMLElement = document.createElement("div");
        div.setAttribute("class", "artikel");

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = arr[i]._name;
        div.appendChild(name);

        let image: HTMLElement = document.createElement("img");
        image.setAttribute("src", arr[i]._bild);
        image.setAttribute("class", "bild");
        div.appendChild(image);

        let descrip: HTMLElement = document.createElement("p");
        descrip.innerHTML = arr[i]._beschreibung;
        div.appendChild(descrip);

        let price: HTMLElement = document.createElement("p");
        price.setAttribute("class", "preis");
        price.innerHTML = "" + arr[i]._preis + "€  ";
        div.appendChild(price);

        let button: HTMLElement = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerText = "Kaufen";
        price.appendChild(button);
        button.addEventListener("click", handleMenge);
        
        function handleMenge(): void {

            document.getElementById("anzahl")?.remove();

            let menge: HTMLElement = document.createElement("div");
            menge.setAttribute("id", "anzahl");
            document.getElementById("circle")?.appendChild(menge);

            let inhalt: HTMLElement = document.createElement("P");
            menge.appendChild(inhalt);

            counter.push(arr[i]._preis);

            let gesamt: number = 0;

            for (let i: number = 0; i < counter.length; i++){
                gesamt = gesamt + counter[i];
            }

            console.log("Summe:" + gesamt.toLocaleString("de-DE", {"currency": "EUR", "style": "currency"}));

            inhalt.innerHTML = "" + counter.length;
        }

        let dokumentDiv: HTMLElement = <HTMLElement>document.getElementById(docDiv);
        dokumentDiv.appendChild(div);
    }
} 

    laden(natuerliche, "natuerliche");
    laden(essbare, "essbare");
    laden(spielbare, "spielbare");

    let natu: HTMLElement = <HTMLElement>document.getElementById("natu");
    natu.addEventListener("click", handleNatu);

    let ess: HTMLElement = <HTMLElement>document.getElementById("ess");
    ess.addEventListener("click", handleEss);

    let spiel: HTMLElement = <HTMLElement>document.getElementById("spiel");
    spiel.addEventListener("click", handleSpiel);

    let all: HTMLElement = <HTMLElement>document.getElementById("all");
    all.addEventListener("click", handleAll);

    function handleNatu(): void {
        let ess: HTMLElement = <HTMLElement> document.getElementById("essbare");
        ess.style.display = "none";

        let spiel: HTMLElement = <HTMLElement> document.getElementById("spielbare");
        spiel.style.display = "none";

        let natu: HTMLElement = <HTMLElement> document.getElementById("natuerliche");
        natu.style.display = "flex";

        let nue: HTMLElement = <HTMLElement> document.getElementById("ank1");
        nue.hidden = false;

        let eue: HTMLElement = <HTMLElement> document.getElementById("ank2");
        eue.hidden = true;
        
        let sue: HTMLElement = <HTMLElement> document.getElementById("ank3");
        sue.hidden = true;
    }

    function handleEss(): void {
        let ess: HTMLElement = <HTMLElement>document.getElementById("essbare");
        ess.style.display = "flex";

        let spiel: HTMLElement = <HTMLElement>document.getElementById("spielbare");
        spiel.style.display = "none";

        let natu: HTMLElement = <HTMLElement>document.getElementById("natuerliche");
        natu.style.display = "none";

        let nue: HTMLElement = <HTMLElement> document.getElementById("ank1");
        nue.hidden = true;

        let eue: HTMLElement = <HTMLElement> document.getElementById("ank2");
        eue.hidden = false;
        
        let sue: HTMLElement = <HTMLElement> document.getElementById("ank3");
        sue.hidden = true;
    }

    function handleSpiel(): void {
        let ess: HTMLElement = <HTMLElement>document.getElementById("essbare");
        ess.style.display = "none";

        let spiel: HTMLElement = <HTMLElement>document.getElementById("spielbare");
        spiel.style.display = "flex";

        let natu: HTMLElement = <HTMLElement>document.getElementById("natuerliche");
        natu.style.display = "none";

        let nue: HTMLElement = <HTMLElement> document.getElementById("ank1");
        nue.hidden = true;

        let eue: HTMLElement = <HTMLElement> document.getElementById("ank2");
        eue.hidden = true;
        
        let sue: HTMLElement = <HTMLElement> document.getElementById("ank3");
        sue.hidden = false;
    }

    function handleAll(): void {
        let ess: HTMLElement = <HTMLElement>document.getElementById("essbare");
        ess.style.display = "flex";

        let spiel: HTMLElement = <HTMLElement>document.getElementById("spielbare");
        spiel.style.display = "flex";

        let natu: HTMLElement = <HTMLElement>document.getElementById("natuerliche");
        natu.style.display = "flex";

        let nue: HTMLElement = <HTMLElement> document.getElementById("ank1");
        nue.hidden = false;

        let eue: HTMLElement = <HTMLElement> document.getElementById("ank2");
        eue.hidden = false;
        
        let sue: HTMLElement = <HTMLElement> document.getElementById("ank3");
        sue.hidden = false;
    }


}