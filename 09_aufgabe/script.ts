namespace Aufgabe09 {

    let button: HTMLElement = <HTMLElement>document.getElementById("send");
    button?.addEventListener("click", handleButton);

    let formData: FormData;

    async function handleButton(): Promise<void> {

        formData = new FormData(document.forms[0]);

        let url: string = "https://hfugissose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let response2: string = response.url;
        console.log(response2);

        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}