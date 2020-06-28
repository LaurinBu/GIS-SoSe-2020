"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let button = document.getElementById("send");
    button?.addEventListener("click", handleButton);
    let formData;
    async function handleButton() {
        formData = new FormData(document.forms[0]);
        let url = "https://hfugissose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let response2 = response.url;
        console.log(response2);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe09 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map