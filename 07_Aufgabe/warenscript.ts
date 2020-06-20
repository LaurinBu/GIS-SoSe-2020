namespace Aufgabe07 {

    let localArray: Artikel[] = JSON.parse(localStorage.getItem("Artikel")!);
    let korb: HTMLElement = <HTMLElement>document.getElementById("korb");
    let summe: number = JSON.parse(localStorage.getItem("Summe")!);

    let gesamtpreis: HTMLElement = <HTMLElement>document.getElementById("gesamtpreis");
    summe = JSON.parse(localStorage.getItem("Summe")!);
    let gerundet: string = summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency"});
    gesamtpreis.innerHTML = gerundet;

    for (let i: number = 0; i < localArray.length; i++) {

        let div: HTMLElement = document.createElement("div");
        div.setAttribute("class", "artikel");

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = localArray[i]._name;
        div.appendChild(name);

        let image: HTMLElement = document.createElement("img");
        image.setAttribute("src", localArray[i]._bild);
        image.setAttribute("class", "bild");
        div.appendChild(image);

        let descrip: HTMLElement = document.createElement("p");
        descrip.innerHTML = localArray[i]._beschreibung;
        div.appendChild(descrip);

        let price: HTMLElement = document.createElement("p");
        price.setAttribute("class", "preis");
        price.innerHTML = "" + localArray[i]._preis + "€  ";
        div.appendChild(price);

        let button: HTMLElement = document.createElement("button");
        button.setAttribute("id", "entfernenButton");
        button.innerText = "Entfernen";
        price.appendChild(button);
        button.setAttribute("stelle", "" + i);
        button.setAttribute("preis", "" + localArray[i]._preis);
        button.addEventListener("click", handleEntfernen);

        function handleEntfernen(): void {

            let index: number = parseFloat(button.getAttribute("stelle")!);
            localArray.splice(index, 1);
            localStorage.setItem("Artikel", JSON.stringify(localArray));

            let preis: number = parseFloat(button.getAttribute("preis")!);
            let neueSumme: number = summe - preis;
            localStorage.setItem("Summe", JSON.stringify(neueSumme));

            window.location.reload();
        }

        korb.appendChild(div);
    }

    let deleteAll: HTMLElement = <HTMLElement>document.getElementById("deleteAll");
    deleteAll.addEventListener("click", handleDeleteAll);

    function handleDeleteAll(): void {

        localStorage.clear();
        window.location.reload();
    }
    
}