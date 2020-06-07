namespace Aufgabe05 {

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

        let dokumentDiv: HTMLElement = <HTMLElement>document.getElementById(docDiv);
        dokumentDiv.appendChild(div);
    }
} 

    laden(natuerliche, "natuerliche");
    laden(essbare, "essbare");
    laden(spielbare, "spielbare");

}