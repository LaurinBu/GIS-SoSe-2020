namespace Aufgabe05 {

    export interface Artikel {
       _name: string;
       _beschreibung: string;
       _preis: number;
       _bild: string;
    }

    let birkenstock: Artikel = {_name: "Frischer Birken Stock", _beschreibung: "Gut zum verfeuern!", _preis: 0.61, _bild: "birke.png"};
    let asia: Artikel = {_name: "Asiatischer Bambus", _beschreibung: "Gut für konstruktion!", _preis: 1.20, _bild: "bambus_stick.png"};
    let buendel: Artikel = {_name: "Bündel an frischen Stöcken", _beschreibung: "Für größere Feuer geignet!", _preis: 4.20, _bild: "buendel_sticks.png"};
    let alte: Artikel = {_name: "Alte Stöcke zum anfeuern", _beschreibung: "Für kleine Feuer geeignet!", _preis: 3.20, _bild: "buendel_stoecke.png"};

    export let natuerliche: Artikel[] = [birkenstock, asia, buendel, alte];
    
    let zucker: Artikel = {_name: "Süße Zuckerstange", _beschreibung: "Perfekt auch für die Weihnachtszeit!", _preis: 0.50, _bild: "candy_stick.png"};
    let zimt: Artikel = {_name: "Zimt Stangen", _beschreibung: "Gut zum Backen oder so!", _preis: 0.10, _bild: "cinamin_sticks.png"};
    let mozza: Artikel = {_name: "Mozarella Sticks", _beschreibung: "Lecker & perfekt mit Dip!", _preis: 0.50, _bild: "mozarrela_sticks.png"};

    export let essbare: Artikel[] = [zucker, zimt, mozza];

    let schlag: Artikel = {_name: "Schlagzeugstöcke", _beschreibung: "Hilfreich beim Schlagzeugspielen!", _preis: 7.80, _bild: "drumsticks.png"};
    let hockey: Artikel = {_name: "Hockey Stock", _beschreibung: "Zum spielen von Hockey!", _preis: 20.40, _bild: "hockey_stick.png"};
    let minecraft: Artikel = {_name: "Minecraft Stock", _beschreibung: "Ohne ihn macht crafting keinen Sinn!", _preis: 240, _bild: "minecraft_stick.png"};
    let selfie: Artikel = {_name: "Selfie Stick", _beschreibung: "Damit gelingt jedem das perfekte Selfie!", _preis: 12.90, _bild: "selfie_stick.png"};
    let usb: Artikel = {_name: "USb Stick", _beschreibung: "4 GB purer Datenspeicher!", _preis: 2.20, _bild: "usb_stick.png"};
    
    export let spielbare: Artikel[] = [schlag, hockey, minecraft, selfie, usb];

}