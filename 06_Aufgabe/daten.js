"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let birkenstock = { _name: "Frischer Birken Stock", _beschreibung: "Gut zum verfeuern!", _preis: 0.61, _bild: "birke.png" };
    let asia = { _name: "Asiatischer Bambus", _beschreibung: "Gut für konstruktion!", _preis: 1.20, _bild: "bambus_stick.png" };
    let buendel = { _name: "Bündel an frischen Stöcken", _beschreibung: "Für größere Feuer geignet!", _preis: 4.20, _bild: "buendel_sticks.png" };
    let alte = { _name: "Alte Stöcke zum anfeuern", _beschreibung: "Für kleine Feuer geeignet!", _preis: 3.20, _bild: "buendel_stoecke.png" };
    Aufgabe06.natuerliche = [birkenstock, asia, buendel, alte];
    let zucker = { _name: "Süße Zuckerstange", _beschreibung: "Perfekt auch für die Weihnachtszeit!", _preis: 0.50, _bild: "candy_stick.png" };
    let zimt = { _name: "Zimt Stangen", _beschreibung: "Gut zum Backen oder so!", _preis: 0.10, _bild: "cinamin_sticks.png" };
    let mozza = { _name: "Mozarella Sticks", _beschreibung: "Lecker & perfekt mit Dip!", _preis: 0.50, _bild: "mozarrela_sticks.png" };
    Aufgabe06.essbare = [zucker, zimt, mozza];
    let schlag = { _name: "Schlagzeugstöcke", _beschreibung: "Hilfreich beim Schlagzeugspielen!", _preis: 7.80, _bild: "drumsticks.png" };
    let hockey = { _name: "Hockey Stock", _beschreibung: "Zum spielen von Hockey!", _preis: 20.40, _bild: "hockey_stick.png" };
    let minecraft = { _name: "Minecraft Stock", _beschreibung: "Ohne ihn macht crafting keinen Sinn!", _preis: 240, _bild: "minecraft_stick.png" };
    let selfie = { _name: "Selfie Stick", _beschreibung: "Damit gelingt jedem das perfekte Selfie!", _preis: 12.90, _bild: "selfie_stick.png" };
    let usb = { _name: "USb Stick", _beschreibung: "4 GB purer Datenspeicher!", _preis: 2.20, _bild: "usb_stick.png" };
    Aufgabe06.spielbare = [schlag, hockey, minecraft, selfie, usb];
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=daten.js.map