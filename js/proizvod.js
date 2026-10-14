// =====================================================
// 1. BAZA PODATAKA PROIZVODA
// =====================================================

const proizvodi = {
    "nike-tech-fleece-joggers--donji-deo": {
        naziv: "Nike Tech Fleece 2025 - Donji deo",
        kategorija: "DONJI DEO",
        cena: "6.990 RSD",
        staraCena: "11.990 RSD",
        boje: [
            {
                ime: "Teget",
                hex: "#1d2536",
                slike: [
                    "../img/proizvodi slike/techlfleeceeteget2025_7.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_8.jpg",
                    "../img/proizvodi slike/techlfleeceeteget2025_9.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_10.webp"
                ]
            },
            {
                ime: "Crno-Siva",
                hex: "#a6a6a6",
                slike: [
                    "../img/proizvodi slike/techlfleececrnosivi2025_8.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_9.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_10.webp"
                ]
            },
            {
                ime: "Siva",
                hex: "#d1d5db",
                slike: [
                    "../img/proizvodi slike/techlfleecesivi2025_4.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_5.webp"
                ]
            },
            {
                ime: "Crna",
                hex: "#111111",
                slike: [
                    "../img/proizvodi slike/techlfleececrni2025_6.webp",
                    "../img/proizvodi slike/techlfleececrni2025_7.webp",
                    "../img/proizvodi slike/techlfleececrni2025_8.webp",
                    "../img/proizvodi slike/techlfleececrni2025_9.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Najnoviji model Nike Tech Fleece donjeg dela za 2025. godinu donosi savršeno izbalansiran kroj koji se blago sužava ka zglobovima. Izrađen je od laganog, ali izuzetno toplog pamučnog fleece materijala koji zadržava temperaturu tela bez dodatne težine. Prepoznatljivi bočni džep sa rajferšlusom obloženim trakom pruža siguran prostor za telefon i ključeve. Elastičan pojas sa podesivim učkurom omogućava maksimalnu udobnost tokom celodnevnog nošenja. Dostupan u više atraktivnih nijansi, ovaj donji deo je nezaobilazan komad za moderan ulični stil."
    },

    "nike-tech-fleece-joggers--gornji-deo": {
        naziv: "Nike Tech Fleece 2025 - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "7.490 RSD",
        staraCena: "12.990 RSD",
        boje: [
            {
                ime: "Teget",
                hex: "#1d2536",
                slike: [
                    "../img/proizvodi slike/techlfleeceeteget2025_1.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_2.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_3.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_4.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_5.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_6.webp"
                ]
            },
            {
                ime: "Crno-Siva",
                hex: "#a6a6a6",
                slike: [
                    "../img/proizvodi slike/techlfleececrnosivi2025_7.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_6.webp",
                    "../img/proizvodi slike/techlfleecescrnosivi2025_4.webp",
                    "../img/proizvodi slike/techlfleecescrnosivi2025_3.webp"
                ]
            },
            {
                ime: "Siva",
                hex: "#d1d5db",
                slike: [
                    "../img/proizvodi slike/techlfleecesivi2025_1.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_3.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_6.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_7.webp"
                ]
            },
            {
                ime: "Crna",
                hex: "#111111",
                slike: [
                    "../img/proizvodi slike/techlfleececrni2025_4.webp",
                    "../img/proizvodi slike/techlfleececrni2025_3.webp",
                    "../img/proizvodi slike/techlfleececrni2025_5.webp",
                    "../img/proizvodi slike/techlfleececrni2025_2.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Dizajniran za one koji ne pristaju na kompromise između udobnosti i stila, ovaj gornji deo duks-jakne pruža vrhunsku zaštitu od hladnoće. Opremljen je funkcionalnim rajferšlusom punom dužinom i višedelnom kapuljačom koja lepo prianja uz glavu. Džep sa rajferšlusom na rukavu predstavlja prepoznatljiv Tech Fleece pečat i idealan je za sitnice. Premium materijal sprečava gubljenje oblika čak i nakon višekratnog pranja. Lako se kombinuje kako sa sportskim, tako i sa svakodnevnim urbano-casual outfitima."
    },

    "nike-tech-fleece-joggers-komplet": {
        naziv: "Nike Tech Fleece 2025 - Komplet",
        kategorija: "KOMPLET",
        cena: "13.490 RSD",
        staraCena: "22.990 RSD",
        boje: [
            {
                ime: "Teget",
                hex: "#1d2536",
                slike: [
                    "../img/proizvodi slike/techlfleeceeteget2025_3.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_4.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_2.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_5.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_7.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_8.jpg",
                    "../img/proizvodi slike/techlfleeceeteget2025_9.webp",
                    "../img/proizvodi slike/techlfleeceeteget2025_10.webp"
                ]
            },
            {
                ime: "Crno-Siva",
                hex: "#a6a6a6",
                slike: [
                    "../img/proizvodi slike/techlfleecescrnosivi2025_4.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_6.webp",
                    "../img/proizvodi slike/techlfleecescrnosivi2025_3.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_7.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_8.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_9.webp",
                    "../img/proizvodi slike/techlfleececrnosivi2025_10.webp"
                ]
            },
            {
                ime: "Siva",
                hex: "#d1d5db",
                slike: [
                    "../img/proizvodi slike/techlfleecesivi2025_1.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_3.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_6.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_7.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_4.webp",
                    "../img/proizvodi slike/techlfleecesivi2025_5.webp"
                ]
            },
            {
                ime: "Crna",
                hex: "#111111",
                slike: [
                    "../img/proizvodi slike/techlfleececrni2025_1.webp",
                    "../img/proizvodi slike/techlfleececrni2025_2.webp",
                    "../img/proizvodi slike/techlfleececrni2025_3.webp",
                    "../img/proizvodi slike/techlfleececrni2025_4.webp",
                    "../img/proizvodi slike/techlfleececrni2025_5.webp",
                    "../img/proizvodi slike/techlfleececrni2025_6.webp",
                    "../img/proizvodi slike/techlfleececrni2025_7.webp",
                    "../img/proizvodi slike/techlfleececrni2025_8.webp",
                    "../img/proizvodi slike/techlfleececrni2025_9.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Kompletan Nike Tech Fleece 2025 komplet predstavlja vrhunac sportske elegancije i funkcionalnosti. Spoj gornjeg i donjeg dela u istoj nijansi garantuje besprekoran vizuelni utisak gde god da se pojaviš. Dvoslojni termo materijal pruža optimalnu toplotu bez glomaznosti, čineći ga idealnim za sve sezone. Precizno ukrojeni šavovi prate prirodne linije tela dajući punu slobodu pokreta. Izaberi svoju omiljenu boju i uživaj u maksimalnom komforu i premium izgledu."
    },

    "tech-fleece-crno-syna": {
        naziv: "Nike Tech Fleece Crno Syna",
        kategorija: "KOMPLET",
        cena: "12.490 RSD",
        staraCena: "21.990 RSD",
        boje: [
            {
                ime: "Crno-Syna",
                hex: "#B76E79",
                slike: [
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-front-set.jpg",
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-back-set.webp",
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-front-set.webp",
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-detail-set.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Limitirana kolaboracija inspirisana Syna World estetikom i Central Cee stilom donosi ekskluzivan dizajn na klasiku. Karakterišu ga specifični roze/ružičasti detalji i logotipi koji razbijaju klasičnu crnu podlogu. Izrađen je od specijalno tretiranog fleece pamuka visoke gustine koji drži formu i pruža premium osećaj na dodir. Unutrašnjost je meka i ugodna za kožu, dok spoljašnost garantuje otpornost na habanje. Ovaj komplet je pravi kolekcionarski komad za ljubitelje ulične mode koji žele da se istaknu."
    },

    "tech-fleece-crno-syna-gornji-deo": {
        naziv: "Nike Tech Fleece Crno Syna - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "5.990 RSD",
        staraCena: "8.990 RSD",
        boje: [
            {
                ime: "Crno-Syna",
                hex: "#B76E79",
                slike: [
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-front-set.jpg",
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-back-set.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Ekskluzivni Syna World x Nike gornji deo duks kombinacije nosi jedinstvenu grafiku na leđima i prednjem delu. Kapuljača sa podesivim trakama i upečatljivim roze detaljima daje mu prepoznatljiv karakter. Opremljen je dvostranim rajferšlusom i skrivenim džepovima za moderan siluetni izgled. Materijal pruža sjajnu termoizolaciju tokom hladnijih dana. Savršen izbor za kombinovanje sa farmerkama ili crnim donjim delovima trenerke."
    },

    "tech-fleece-crno-syna-donji-deo": {
        naziv: "Nike Tech Fleece Crno Syna - Donji deo",
        kategorija: "DONJI DEO",
        cena: "4.990 RSD",
        staraCena: "8.990 RSD",
        boje: [
            {
                ime: "Crno-Syna",
                hex: "#B76E79",
                slike: [
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-front-set.webp",
                    "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-back-set.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Syna specijalno izdanje donjeg dela donosi prepoznatljive grafičke akcente na nogavici u kontrastnoj roze nijansi. Suženi slim-fit kroj u kombinaciji sa elastičnim patentima na dnu ističe tvoje patike na pravi način. Duboki džepovi sa rajferšlusima osiguravaju bezbednost ličnih stvari u pokretu. Izrađen od mešavine pamuka i poliestera za dugotrajnost i vrhunsku udobnost. Idealan za sve koji traže autentičan i hrabar stil."
    },

    "tech-fleece-2023-gornji-deo": {
        naziv: "Nike Tech Fleece 2023 Crni - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "6.990 RSD",
        staraCena: "10.990 RSD",
        boje: [
            {
                ime: "Crna",
                hex: "#111111",
                slike: [
                    "../img/Nike Tech Fleece 2023/Crni/gornjideo1.webp",
                    "../img/Nike Tech Fleece 2023/Crni/gornjideo2.webp",
                    "../img/Nike Tech Fleece 2023/Crni/gornjideo3pozadi.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Klasik iz 2023. kolekcije u mat crnoj boji koji nikada ne izlazi iz mode. Odlikuje ga izuzetno čist i minimalistički dizajn sa diskretnim Nike logotipom na kuku. Anatomski oblikovani šavovi u predelu kolena omogućavaju potpuno prirodno kretanje. Veliki bočni džep sa uzdužnim rajferšlusom pruža funkcionalnost i estetski prepoznatljiv pečat. Materijal pruža blagu elastičnost i zadržava punu mekoću tokom nosenja."
    },

    "tech-fleece-2023-donji-deo": {
        naziv: "Nike Tech Fleece 2023 Crni - Donji deo",
        kategorija: "DONJI DEO",
        cena: "6.990 RSD",
        staraCena: "10.990 RSD",
        boje: [
            {
                ime: "Crna",
                hex: "#111111",
                slike: [
                    "../img/Nike Tech Fleece 2023/Crni/gornjidonjideosedi1.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Klasik iz 2023. kolekcije u mat crnoj boji koji nikada ne izlazi iz mode. Odlikuje ga izuzetno čist i minimalistički dizajn sa diskretnim Nike logotipom na kuku. Anatomski oblikovani šavovi u predelu kolena omogućavaju potpuno prirodno kretanje. Veliki bočni džep sa uzdužnim rajferšlusom pruža funkcionalnost i estetski prepoznatljiv pečat. Materijal pruža blagu elastičnost i zadržava punu mekoću tokom nosenja."
    },

    "tech-fleece-2023-komplet": {
        naziv: "Nike Tech Fleece 2023 Crni - Komplet",
        kategorija: "KOMPLET",
        cena: "12.990 RSD",
        staraCena: "18.990 RSD",
        boje: [
            {
                ime: "Crna",
                hex: "#111111",
                slike: [
                    "../img/Nike Tech Fleece 2023/Crni/komplet1.webp",
                    "../img/Nike Tech Fleece 2023/Crni/gornjideo1.webp",
                    "../img/Nike Tech Fleece 2023/Crni/gornjideo2.webp",
                    "../img/Nike Tech Fleece 2023/Crni/gornjideo3pozadi.webp",
                    "../img/Nike Tech Fleece 2023/Crni/gornjidonjideosedi1.webp"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Bezvremenski crni Nike Tech Fleece komplet iz 2023. godine predstavlja osnovu svakog dobrog garderobera. Kombinacija duksa sa kapuljačom i donjeg dela stvara uniformisan, oštar i moderan izgled. Lagana troslojna tkanina efikasno čuva toplotu tela dok istovremeno dopušta koži da diše. Ojačani rajsferšlusi i elastične trake osiguravaju dugotrajnost i stabilnost kroja. Savršen za večernje izlaske, putovanja i svakodnevne aktivnosti."
    },

    "tech-fleece-2023-sivi-gornji-deo": {
        naziv: "Nike Tech Fleece 2023 Sivi - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "7.490 RSD",
        staraCena: "11.490 RSD",
        boje: [
            {
                ime: "Siva",
                hex: "#808080",
                slike: [
                    "../img/Nike Tech Fleece 2023/Sivi/gornjideo1.jpg",
                    "../img/Nike Tech Fleece 2023/Sivi/gornjideo2.jpg",
                    "../img/Nike Tech Fleece 2023/Sivi/gornjideo3pozadi.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Prepoznatljiva svetlosiva nijansa daje ovom gornjem delu svež i upečatljiv sportski izgled. Poseduje dvoimeni rajferšlus i visoku kragnu integrisanu sa kapuljačom za dodatnu zaštitu od vetra. Džep sa crnim okvirom na rukavu stvara odličan vizuelni kontrast. Izrađen od meke i tople Tech Fleece tkanine koja ne stvara osećaj težine. Odličan izbor za slojevito oblačenje tokom prelaznog perioda."
    },

    "tech-fleece-2023-sivi-donji-deo": {
        naziv: "Nike Tech Fleece 2023 Sivi - Donji deo",
        kategorija: "DONJI DEO",
        cena: "6.490 RSD",
        staraCena: "9.990 RSD",
        boje: [
            {
                ime: "Siva",
                hex: "#808080",
                slike: [
                    "../img/Nike Tech Fleece 2023/Sivi/komplet1.jpg",
                    "../img/Nike Tech Fleece 2023/Sivi/komplet2.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Sivi Tech Fleece donji deo donosi idealan balans između ulične mode i sportske opreme. Elegantan kroj koji prati liniju noge naglašava figuru bez zatezanja. Podesivi pojas sa pertlom osigurava da donji deo stoji čvrsto na mestu bez obzira na intenzitet pokreta. Džepovi obloženi kvalitetnim rajferšlusima drže sve tvoje dragocenosti na sigurnom. Neutralna siva boja lako se kombinuje sa bilo kojom bojom patika."
    },

    "tech-fleece-2023-sivi-komplet": {
        naziv: "Nike Tech Fleece 2023 Sivi - Komplet",
        kategorija: "KOMPLET",
        cena: "13.490 RSD",
        staraCena: "19.990 RSD",
        boje: [
            {
                ime: "Siva",
                hex: "#808080",
                slike: [
                    "../img/Nike Tech Fleece 2023/Sivi/komplet1.jpg",
                    "../img/Nike Tech Fleece 2023/Sivi/komplet2.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Sivi komplet iz 2023. serije jedan je od najpopularnijih modela ikada izbačenih u Tech Fleece liniji. Svetlosivi tonovi u kombinaciji sa crnim rajferšlusima daju moćan i čist vizuelni efekat. Dizajniran je da pruži maksimalnu udobnost bilo da si u teretani, šetnji ili na kafu u gradu. Tkanina zadržava prirodnu toplotu tela i štiti od hladnih vetrova. Idealan komplet za svakoga ko voli proverenu klasiku."
    },

    "tech-fleece-2023-crno-sivi-gornji-deo": {
        naziv: "Nike Tech Fleece 2023 Crno-Sivi - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "7.990 RSD",
        staraCena: "11.990 RSD",
        boje: [
            {
                ime: "Crno-Siva",
                hex: "#a6a6a6",
                slike: [
                    "../img/Nike Tech Fleece 2023/CrnoSivi/gornjideo1.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/gornjideo2pozadi.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/gornjideo3jpg.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Dvobojna kombinacija crnih i sivih panela daje ovom gornjem delu dinamiku i moderan izgled. Strateški raspoređeni blokovi boja vizuelno sužavaju siluetu i naglašavaju ramena. Kapuljača od višedelnog materijala stabilno stoji i nudi odličnu zaštitu od vetra. Funkcionalni džepovi sa zaštitnom trakom osiguravaju da unutrašnjost ostane suva. Pravi izbor za sve koji žele nešto više od jednobojnog duksa."
    },

    "tech-fleece-2023-crno-sivi-donji-deo": {
        naziv: "Nike Tech Fleece 2023 Crno-Sivi - Donji deo",
        kategorija: "DONJI DEO",
        cena: "6.790 RSD",
        staraCena: "10.490 RSD",
        boje: [
            {
                ime: "Crno-Siva",
                hex: "#a6a6a6",
                slike: [
                    "../img/Nike Tech Fleece 2023/CrnoSivi/komplet1.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/komplet2.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Atraktivan dvobojni donji deo koji kombinuje sivu bazu sa kontrastnim crnim detaljima i džepovima. Ergonomske linije na kolenima sprječavaju rastezanje materijala tokom guranja i sedenja. Podesivi struk pruža stabilno pristajanje bez pritiska na stomak. Meki fleece materijal prija koži i osigurava celodnevnu udobnost. Odličan za isticanje u masi i pravljenje efektnih uličnih kombinacija."
    },

    "tech-fleece-2023-crno-sivi-komplet": {
        naziv: "Nike Tech Fleece 2023 Crno-Sivi - Komplet",
        kategorija: "KOMPLET",
        cena: "11.490 RSD",
        staraCena: "20.990 RSD",
        boje: [
            {
                ime: "Crno-Siva",
                hex: "#a6a6a6",
                slike: [
                    "../img/Nike Tech Fleece 2023/CrnoSivi/komplet1.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/komplet2.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/gornjideo1.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/gornjideo2pozadi.jpg",
                    "../img/Nike Tech Fleece 2023/CrnoSivi/gornjideo3jpg.jpg"
                ]
            }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Snažan dvobojni komplet u kombinaciji crne i sive nijanse stvoren za najzahtevnije ljubitelje stila. Kontrastni blokovi na gornjem i donjem delu čine ga izuzetno upečatljivim iz svih uglova. Vrhunska izrada sa ojačanim šavovima garantuje visoku otpornost i trajanje kroz sezone. Pruža savršenu termičku izolaciju i potpunu slobodu pokreta. Komplet koji unosi futurističku i urbanu dimenziju u tvoju svakodnevnu garderobu."
    }
};


// =====================================================
// 2. POMOĆNE FUNKCIJE
// =====================================================

// Bezbedno čitanje korpe iz localStorage-a.
function ucitajKorpu() {
    try {
        const sacuvanaKorpa = JSON.parse(
            localStorage.getItem("prestigeKorpa") || "[]"
        );

        return Array.isArray(sacuvanaKorpa) ? sacuvanaKorpa : [];
    } catch (greska) {
        console.warn(
            "Korpa nije mogla da se učita iz localStorage-a:",
            greska
        );
        return [];
    }
}

// Pokretanje funkcije tek kada je HTML spreman.
function pokreniKadaDOMSpreman(callback) {
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            callback,
            { once: true }
        );
    } else {
        callback();
    }
}


// =====================================================
// 3. DINAMIČKI SEO
// =====================================================

function postaviDinamicniSEO(proizvod, urlId) {
    if (!proizvod) return;

    const domenSajta = "https://prestigewearr.netlify.app";

    document.title = `${proizvod.naziv} | Prestige Wear`;

    const metaOpis = document.querySelector(
        'meta[name="description"]'
    );

    if (metaOpis) {
        metaOpis.setAttribute("content", proizvod.opis);
    }

    const ogTitle = document.querySelector(
        'meta[property="og:title"]'
    );

    if (ogTitle) {
        ogTitle.setAttribute(
            "content",
            `${proizvod.naziv} | Prestige Wear`
        );
    }

    const ogDesc = document.querySelector(
        'meta[property="og:description"]'
    );

    if (ogDesc) {
        ogDesc.setAttribute("content", proizvod.opis);
    }

    const ogUrl = document.querySelector(
        'meta[property="og:url"]'
    );

    if (ogUrl) {
        ogUrl.setAttribute(
            "content",
            `${domenSajta}/proizvod.html?id=${encodeURIComponent(urlId)}`
        );
    }

    let apsolutnaPutanjaSlike = "";

    if (
        proizvod.boje &&
        proizvod.boje.length > 0 &&
        proizvod.boje[0].slike &&
        proizvod.boje[0].slike.length > 0
    ) {
        const cistaPutanja =
            proizvod.boje[0].slike[0].replace(/^\.\.\//, "");

        apsolutnaPutanjaSlike =
            `${domenSajta}/${cistaPutanja}`;

        const ogImage = document.querySelector(
            'meta[property="og:image"]'
        );

        if (ogImage) {
            ogImage.setAttribute(
                "content",
                apsolutnaPutanjaSlike
            );
        }
    }

    const cistaCena = proizvod.cena.replace(/\D/g, "");

    const schemaPodaci = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": proizvod.naziv,
        "image": apsolutnaPutanjaSlike,
        "description": proizvod.opis,
        "brand": {
            "@type": "Brand",
            "name": "Prestige Wear"
        },
        "offers": {
            "@type": "Offer",
            "url": `${domenSajta}/proizvod.html?id=${encodeURIComponent(urlId)}`,
            "priceCurrency": "RSD",
            "price": cistaCena,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    // Sprečavamo dodavanje dupliranih Product schema skripti.
    let scriptElement = document.getElementById("product-schema");

    if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "product-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schemaPodaci);
}


// Poziv SEO funkcije za trenutno izabrani proizvod.
const seoUrlParams = new URLSearchParams(window.location.search);
const seoProizvodId = seoUrlParams.get("id");
const seoTrenutniProizvod = proizvodi[seoProizvodId];

if (seoTrenutniProizvod) {
    postaviDinamicniSEO(seoTrenutniProizvod, seoProizvodId);
}


// =====================================================
// 4. MOBILNI MENI
// =====================================================

pokreniKadaDOMSpreman(function () {
    const btnOtvori = document.getElementById("otvori-meni");
    const btnZatvori = document.getElementById("zatvori-meni");
    const overlay = document.getElementById("mobilniOverlay");

    if (btnOtvori && overlay) {
        btnOtvori.addEventListener("click", function () {
            overlay.classList.add("otvoren");
            document.body.style.overflow = "hidden";
        });
    }

    if (btnZatvori && overlay) {
        btnZatvori.addEventListener("click", function () {
            overlay.classList.remove("otvoren");
            document.body.style.overflow = "";
        });
    }

    // Zatvaranje menija klikom na link unutar otvorenog menija.
    if (overlay) {
        overlay.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                overlay.classList.remove("otvoren");
                document.body.style.overflow = "";
            });
        });
    }
});


// =====================================================
// 5. STRANICA PROIZVODA
// =====================================================

pokreniKadaDOMSpreman(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const proizvod = proizvodi[id];

    // Ako ID proizvoda ne postoji, prikazujemo poruku.
    if (!proizvod) {
        const sadrzaj = document.getElementById("proizvod-sadrzaj");

        if (sadrzaj) {
            sadrzaj.innerHTML = `
                <div class="text-center py-5">
                    <h2 class="text-white">Proizvod nije pronađen</h2>
                    <a href="./katalog.html"
                       class="btn btn-warning mt-3">
                        Nazad na katalog
                    </a>
                </div>
            `;
        }

        return;
    }

    // Osnovne informacije o proizvodu.
    const nazivEl = document.getElementById("proizvod-naziv");
    const kategorijaEl = document.getElementById("proizvod-kategorija");
    const cenaEl = document.getElementById("proizvod-cena");
    const staraCenaEl = document.getElementById("proizvod-stara-cena");
    const opisEl = document.getElementById("proizvod-opis");

    if (nazivEl) nazivEl.innerText = proizvod.naziv;
    if (kategorijaEl) kategorijaEl.innerText = proizvod.kategorija;
    if (cenaEl) cenaEl.innerText = proizvod.cena;

    if (staraCenaEl) {
        staraCenaEl.innerText = proizvod.staraCena || "";
    }

    if (opisEl) {
        opisEl.innerText = proizvod.opis;
    }


    // -------------------------------------------------
    // SLIKE, BOJE I STRELICE
    // -------------------------------------------------

    const elSlika = document.getElementById("proizvod-slika");
    const btnLevo = document.getElementById("strelica-levo");
    const btnDesno = document.getElementById("strelica-desno");
    const bojaNazivEl = document.getElementById("izabrana-boja-naziv");
    const bojeKontejner = document.getElementById("proizvod-boje");

    let trenutniNizSlika = [];
    let trenutniIndexSlike = 0;
    let izabranaBoja = "";

    function osveziSliku() {
        if (!elSlika || trenutniNizSlika.length === 0) {
            return;
        }

        elSlika.src = trenutniNizSlika[trenutniIndexSlike];
        elSlika.alt = proizvod.naziv;

        const prikaziStrelice = trenutniNizSlika.length > 1;

        if (btnLevo) {
            btnLevo.style.display = prikaziStrelice ? "block" : "none";
        }

        if (btnDesno) {
            btnDesno.style.display = prikaziStrelice ? "block" : "none";
        }
    }

    if (btnDesno) {
        btnDesno.onclick = function () {
            if (trenutniNizSlika.length > 0) {
                trenutniIndexSlike =
                    (trenutniIndexSlike + 1) % trenutniNizSlika.length;

                osveziSliku();
            }
        };
    }

    if (btnLevo) {
        btnLevo.onclick = function () {
            if (trenutniNizSlika.length > 0) {
                trenutniIndexSlike =
                    (trenutniIndexSlike - 1 + trenutniNizSlika.length) %
                    trenutniNizSlika.length;

                osveziSliku();
            }
        };
    }

    // Kreiranje dugmića za boje.
    if (proizvod.boje && proizvod.boje.length > 0 && bojeKontejner) {
        bojeKontejner.innerHTML = "";

        proizvod.boje.forEach(function (bojaObj, index) {
            const kruzic = document.createElement("div");

            kruzic.className =
                `boja-kruzic ${index === 0 ? "active" : ""}`;

            kruzic.style.backgroundColor = bojaObj.hex;
            kruzic.title = bojaObj.ime;
            kruzic.setAttribute("role", "button");
            kruzic.setAttribute("tabindex", "0");
            kruzic.setAttribute(
                "aria-label",
                `Izaberi boju ${bojaObj.ime}`
            );

            function izaberiBoju() {
                bojeKontejner
                    .querySelectorAll(".boja-kruzic")
                    .forEach(function (k) {
                        k.classList.remove("active");
                    });

                kruzic.classList.add("active");

                if (bojaNazivEl) {
                    bojaNazivEl.innerText = bojaObj.ime;
                }

                izabranaBoja = bojaObj.ime;

                if (bojaObj.slike && bojaObj.slike.length > 0) {
                    trenutniNizSlika = bojaObj.slike;
                    trenutniIndexSlike = 0;
                    osveziSliku();
                }
            }

            kruzic.addEventListener("click", izaberiBoju);

            kruzic.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    izaberiBoju();
                }
            });

            bojeKontejner.appendChild(kruzic);

            if (index === 0) {
                izabranaBoja = bojaObj.ime;

                if (bojaNazivEl) {
                    bojaNazivEl.innerText = izabranaBoja;
                }

                if (bojaObj.slike && bojaObj.slike.length > 0) {
                    trenutniNizSlika = bojaObj.slike;
                    trenutniIndexSlike = 0;
                    osveziSliku();
                }
            }
        });
    }


    // -------------------------------------------------
    // IZBOR VELIČINE
    // -------------------------------------------------

    let izabranaVelicina =
        proizvod.velicine && proizvod.velicine.length > 0
            ? proizvod.velicine[0]
            : "";

    const velicineKontejner = document.getElementById("proizvod-velicine");

    if (
        velicineKontejner &&
        proizvod.velicine &&
        proizvod.velicine.length > 0
    ) {
        velicineKontejner.innerHTML = "";

        proizvod.velicine.forEach(function (velicina, index) {
            const btn = document.createElement("button");

            btn.type = "button";
            btn.className =
                `btn btn-outline-light me-2 mb-2 ${index === 0 ? "active" : ""}`;

            btn.innerText = velicina;

            btn.addEventListener("click", function (e) {
                e.preventDefault();

                velicineKontejner
                    .querySelectorAll(".btn")
                    .forEach(function (b) {
                        b.classList.remove("active");
                    });

                btn.classList.add("active");
                izabranaVelicina = velicina;
            });

            velicineKontejner.appendChild(btn);
        });
    }


    // -------------------------------------------------
    // DODAVANJE U KORPU
    // -------------------------------------------------

    function dodajUKorpu(preusmeri = false) {
        const korpa = ucitajKorpu();

        const slikaZaKorpu =
            trenutniNizSlika.length > 0
                ? trenutniNizSlika[0]
                : "";

        const artikal = {
            id: id,
            naziv: proizvod.naziv,
            cena: parseInt(proizvod.cena.replace(/\D/g, ""), 10) || 0,
            slika: slikaZaKorpu,
            velicina: izabranaVelicina,
            boja: izabranaBoja
        };

        korpa.push(artikal);

        try {
            localStorage.setItem("prestigeKorpa", JSON.stringify(korpa));
        } catch (greska) {
            console.error("Proizvod nije mogao da se sačuva u korpi:", greska);
            showToast("Greška pri čuvanju korpe. Pokušaj ponovo.");
            return;
        }

        osveziBrojac();

        if (preusmeri) {
            window.location.href = "./korpa.html";
        } else {
            showToast("Proizvod je uspešno dodat u korpu!");
        }
    }


    // Poruka nakon dodavanja u korpu.
    function showToast(message) {
        let toast = document.getElementById("cart-toast");

        if (!toast) {
            toast = document.createElement("div");
            toast.id = "cart-toast";
            toast.className = "cart-toast";

            toast.innerHTML = `
                <span class="cart-toast-icon">✓</span>
                <span id="cart-toast-msg"></span>
            `;

            document.body.appendChild(toast);
        }

        const toastMsg = document.getElementById("cart-toast-msg");

        if (toastMsg) {
            toastMsg.innerText = message;
        }

        window.setTimeout(function () {
            toast.classList.add("show");
        }, 10);

        window.setTimeout(function () {
            toast.classList.remove("show");
        }, 3000);
    }


    // Dugmad za kupovinu.
    const btnDodaj = document.getElementById("dodaj-u-korpu");
    const btnPoruci = document.getElementById("poruci-odmah");

    if (btnDodaj) {
        btnDodaj.onclick = function (e) {
            e.preventDefault();
            dodajUKorpu(false);
        };
    }

    if (btnPoruci) {
        btnPoruci.onclick = function (e) {
            e.preventDefault();
            dodajUKorpu(true);
        };
    }

    // Preporučeni proizvodi.
    prikaziPreporuceneProizvode(id);
});


// =====================================================
// 6. BROJAČ KORPE
// =====================================================

function osveziBrojac() {
    const korpa = ucitajKorpu();
    const badge = document.getElementById("broj-u-korpi");

    if (badge) {
        badge.innerText = korpa.length;
        badge.style.display = korpa.length > 0 ? "inline-block" : "none";
    }
}


// =====================================================
// 7. EFEKAT SKROLANJA HEADERA
// =====================================================

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("skrolovan");
    } else {
        header.classList.remove("skrolovan");
    }
});


// =====================================================
// 8. PREPORUČENI PROIZVODI
// =====================================================

function prikaziPreporuceneProizvode(trenutniId) {
    const kontejner = document.getElementById("preporuceni-kontejner");

    if (!kontejner) return;

    const sviKljucevi = Object.keys(proizvodi).filter(function (kljuc) {
        return kljuc !== trenutniId;
    });

    if (sviKljucevi.length === 0) {
        const sekcija = kontejner.parentElement?.parentElement;

        if (sekcija) {
            sekcija.style.display = "none";
        }

        return;
    }

    // Nasumičan redosled.
    sviKljucevi.sort(function () {
        return Math.random() - 0.5;
    });

    const odabraniKljucevi = sviKljucevi.slice(0, 4);

    let html = "";

    odabraniKljucevi.forEach(function (kljuc, index) {
        const item = proizvodi[kljuc];

        const skrivanjeZaMobilni =
            index >= 2 ? "d-none d-md-block" : "";

        let slikaProizvoda = "";

        if (
            item.boje &&
            item.boje.length > 0 &&
            item.boje[0].slike &&
            item.boje[0].slike.length > 0
        ) {
            slikaProizvoda = item.boje[0].slike[0];
        }

        html += `
            <div class="col-6 col-md-3 ${skrivanjeZaMobilni}">
                <div class="card bg-dark border border-secondary border-opacity-25 h-100 rounded-4 overflow-hidden">
                    <a href="./proizvod.html?id=${encodeURIComponent(kljuc)}">
                        <img
                            src="${slikaProizvoda}"
                            class="card-img-top object-fit-cover"
                            alt="${item.naziv}"
                            loading="lazy"
                            style="height: 220px;"
                        >
                    </a>

                    <div class="card-body d-flex flex-column p-3">
                        <h5 class="card-title text-white fs-6 fw-bold mb-1">
                            ${item.naziv}
                        </h5>

                        <p
                            class="card-text fw-bold mt-auto mb-2"
                            style="color: var(--gold-main);"
                        >
                            ${item.cena}
                        </p>

                        <a
                            href="./proizvod.html?id=${encodeURIComponent(kljuc)}"
                            class="btn btn-outline-warning btn-sm w-100 fw-bold"
                        >
                            Pogledaj
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    kontejner.innerHTML = html;
}


// =====================================================
// 9. PRIKAZ SADRŽAJA KORPE
// =====================================================

function prikaziSadrzajKorpe() {
    const kontejner = document.getElementById("korpa-sadrzaj");

    // Ako ova stranica nema korpu, ne radimo ništa.
    if (!kontejner) return;

    const korpa = ucitajKorpu();

    if (korpa.length === 0) {
        kontejner.innerHTML = `
            <div class="col-12 text-center text-white py-5">
                <h4>Korpa je prazna</h4>

                <a
                    href="./katalog.html"
                    class="btn btn-outline-warning mt-3"
                >
                    Pogledaj proizvode
                </a>
            </div>
        `;

        return;
    }

    let html = "";

    korpa.forEach(function (item, index) {
        const cena =
            Number(item.cena) ||
            parseInt(String(item.cena || "").replace(/\D/g, ""), 10) ||
            0;

        html += `
            <div class="col-12">
                <div class="card bg-dark border border-secondary border-opacity-25 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between">

                    <a
                        href="./proizvod.html?id=${encodeURIComponent(item.id || "")}"
                        class="d-flex align-items-center text-decoration-none text-white flex-grow-1"
                    >
                        <img
                            src="${item.slika || ""}"
                            alt="${item.naziv || "Proizvod"}"
                            class="rounded-3 object-fit-cover me-3"
                            loading="lazy"
                            style="width: 70px; height: 70px;"
                        >

                        <div>
                            <h5 class="fs-6 fw-bold mb-1">
                                ${item.naziv || "Proizvod"}
                            </h5>

                            <p class="text-light opacity-75 small mb-0">
                                Boja: ${item.boja || "-"} |
                                Veličina: ${item.velicina || "-"}
                            </p>
                        </div>
                    </a>

                    <div class="d-flex align-items-center gap-4 ms-3">
                        <span
                            class="fw-bold text-nowrap"
                            style="color: var(--gold-main);"
                        >
                            ${cena.toLocaleString("sr-RS")} RSD
                        </span>

                        <button
                            type="button"
                            onclick="ukloniIzKorpe(${index})"
                            aria-label="Ukloni ${item.naziv || "proizvod"} iz korpe"
                            class="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center"
                            style="width: 35px; height: 35px;"
                        >
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>

                </div>
            </div>
        `;
    });

    kontejner.innerHTML = html;
}


// =====================================================
// 10. UKLANJANJE PROIZVODA IZ KORPE
// =====================================================

function ukloniIzKorpe(index) {
    const korpa = ucitajKorpu();

    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= korpa.length
    ) {
        return;
    }

    korpa.splice(index, 1);

    try {
        localStorage.setItem("prestigeKorpa", JSON.stringify(korpa));
    } catch (greska) {
        console.error("Korpa nije mogla da se sačuva:", greska);
        return;
    }

    prikaziSadrzajKorpe();
    osveziBrojac();
}

// Funkcija mora biti dostupna i dugmetu onclick u HTML-u.
window.ukloniIzKorpe = ukloniIzKorpe;


// =====================================================
// 11. PROMENLJIV BROJ GLEDALACA
// =====================================================

// VAŽNO:
// Ovo je simulirani broj, nije stvaran broj posetilaca sajta.
// Početni broj je od 10 do 20.
// Menja se na svakih 6 sekundi za +1 ili -1.
// Uvek ostaje u rasponu od 10 do 20.

function inicijalizujBrojGledalaca() {
    const viewersEl = document.getElementById("viewers-count");

    // Ako element ne postoji na stranici, prekidamo funkciju.
    if (!viewersEl) return;

    // Sprečavamo da se brojač pokrene više puta na istoj stranici.
    if (viewersEl.dataset.brojacPokrenut === "true") {
        return;
    }

    viewersEl.dataset.brojacPokrenut = "true";

    let currentViewers = Math.floor(Math.random() * 11) + 10;

    viewersEl.textContent = currentViewers;

    window.setInterval(function () {
        const moguciBrojevi = [];

        if (currentViewers > 10) {
            moguciBrojevi.push(currentViewers - 1);
        }

        if (currentViewers < 20) {
            moguciBrojevi.push(currentViewers + 1);
        }

        // Biramo sledeći broj koji se razlikuje za tačno jedan.
        if (moguciBrojevi.length > 0) {
            const nasumicniIndex = Math.floor(
                Math.random() * moguciBrojevi.length
            );

            currentViewers = moguciBrojevi[nasumicniIndex];
        }

        viewersEl.textContent = currentViewers;
    }, 6000);
}


// =====================================================
// 12. POČETNO POKRETANJE FUNKCIJA
// =====================================================

pokreniKadaDOMSpreman(function () {
    osveziBrojac();
    prikaziSadrzajKorpe();
    inicijalizujBrojGledalaca();
});


// =====================================================
// 13. KOLAČIĆI - PRIHVATANJE ILI ODBIJANJE
// =====================================================

pokreniKadaDOMSpreman(function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Ako stranica nema baner, prekidamo bez greške.
    if (!cookieBanner) return;

    // Prikazujemo baner ako korisnik još nije izabrao.
    if (!localStorage.getItem("statusKolacica")) {
        cookieBanner.classList.remove("d-none");
    }

    function sakrijBaner() {
        cookieBanner.style.opacity = "0";

        window.setTimeout(function () {
            cookieBanner.classList.add("d-none");
        }, 300);
    }

    // Prihvatanje kolačića.
    if (acceptBtn) {
        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("statusKolacica", "prihvaceno");

            cookieBanner.style.transition = "opacity 0.3s ease";

            sakrijBaner();
        });
    }

    // Odbijanje kolačića.
    if (rejectBtn) {
        rejectBtn.addEventListener("click", function () {
            localStorage.setItem("statusKolacica", "odbijeno");

            cookieBanner.style.transition = "opacity 0.3s ease";

            sakrijBaner();
        });
    }
});