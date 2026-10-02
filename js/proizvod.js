// 1. BAZA PODATAKA PROIZVODA
const proizvodi = {

    "nike-tech-fleece-joggers--donji-deo": {
    naziv: "Nike Tech Fleece Joggers - Donji deo",
    kategorija: "DONJI DEO",
    cena: "6.990 RSD",
    staraCena: "11.990 RSD",
    boje: [
        { ime: "Teget", hex: "#1d2536", slike: ["../img/proizvodi slike/techlfleeceeteget2025_7.webp", "../img/proizvodi slike/techlfleeceeteget2025_8.jpg", "../img/proizvodi slike/techlfleeceeteget2025_9.webp", "../img/proizvodi slike/techlfleeceeteget2025_10.webp"] },
        { ime: "Crno-Siva", hex: "#a6a6a6", slike: ["../img/proizvodi slike/techlfleececrnosivi2025_8.webp", "../img/proizvodi slike/techlfleececrnosivi2025_9.webp", "../img/proizvodi slike/techlfleececrnosivi2025_10.webp"] },
        { ime: "Siva", hex: "#d1d5db", slike: ["../img/proizvodi slike/techlfleecesivi2025_4.webp", "../img/proizvodi slike/techlfleecesivi2025_5.webp"] },
        { ime: "Crna", hex: "#111111", slike: ["../img/proizvodi slike/techlfleececrni2025_6.webp", "../img/proizvodi slike/techlfleececrni2025_7.webp", "../img/proizvodi slike/techlfleececrni2025_8.webp", "../img/proizvodi slike/techlfleececrni2025_9.webp"] }
    ],
    velicine: ["S", "M", "L", "XL"],
    opis: "Muški donji deo trenerke Nike Tech Fleece Joggers sa prepoznatljivim krojem i džepom sa rajfešlusom."
},

    "nike-tech-fleece-joggers--gornji-deo": {
        naziv: "Nike Tech Fleece Joggers - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "7.490 RSD",
        staraCena: "12.990 RSD",
        boje: [
        { ime: "Teget", hex: "#1d2536", slike: ["../img/proizvodi slike/techlfleeceeteget2025_1.webp", "../img/proizvodi slike/techlfleeceeteget2025_2.webp", "../img/proizvodi slike/techlfleeceeteget2025_3.webp", "../img/proizvodi slike/techlfleeceeteget2025_4.webp", "../img/proizvodi slike/techlfleeceeteget2025_5.webp", "../img/proizvodi slike/techlfleeceeteget2025_6.webp"] },
        { ime: "Crno-Siva", hex: "#a6a6a6", slike: ["../img/proizvodi slike/techlfleececrnosivi2025_7.webp", "../img/proizvodi slike/techlfleececrnosivi2025_6.webp", "../img/proizvodi slike/techlfleececrnosivi2025_4.webp", "../img/proizvodi slike/techlfleececrnosivi2025_3.webp"] },
        { ime: "Siva", hex: "#d1d5db", slike: ["../img/proizvodi slike/techlfleecesivi2025_1.webp", "../img/proizvodi slike/techlfleecesivi2025_3.webp", "../img/proizvodi slike/techlfleecesivi2025_6.webp", "../img/proizvodi slike/techlfleecesivi2025_7.webp"] },
        { ime: "Crna", hex: "#111111", slike: ["../img/proizvodi slike/techlfleececrni2025_4.webp", "../img/proizvodi slike/techlfleececrni2025_3.webp", "../img/proizvodi slike/techlfleececrni2025_5.webp", "../img/proizvodi slike/techlfleececrni2025_2.webp"] }
    ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Ekskluzivni Nike Tech Fleece Joggers gornji deo u vise razlicitih boja."
    },

    "nike-tech-fleece-joggers-komplet": {
        naziv: "Nike Tech Fleece Joggers",
        kategorija: "KOMPLET",
        cena: "13.490 RSD",
        staraCena: "22.990 RSD",
        boje: [
        { ime: "Teget", hex: "#1d2536", slike: ["../img/proizvodi slike/techlfleeceeteget2025_3.webp", "../img/proizvodi slike/techlfleeceeteget2025_4.webp", "../img/proizvodi slike/techlfleeceeteget2025_2.webp", "../img/proizvodi slike/techlfleeceeteget2025_5.webp", "../img/proizvodi slike/techlfleeceeteget2025_7.webp", "../img/proizvodi slike/techlfleeceeteget2025_8.jpg", "../img/proizvodi slike/techlfleeceeteget2025_9.webp", "../img/proizvodi slike/techlfleeceeteget2025_10.webp"] },
        { ime: "Crno-Siva", hex: "#a6a6a6", slike: ["../img/proizvodi slike/techlfleecescrnosivi2025_4.webp", "../img/proizvodi slike/techlfleececrnosivi2025_6.webp", "../img/proizvodi slike/techlfleecescrnosivi2025_3.webp", "../img/proizvodi slike/techlfleececrnosivi2025_7.webp", "../img/proizvodi slike/techlfleececrnosivi2025_8.webp", "../img/proizvodi slike/techlfleececrnosivi2025_9.webp", "../img/proizvodi slike/techlfleececrnosivi2025_10.webp"] },
        { ime: "Siva", hex: "#d1d5db", slike: ["../img/proizvodi slike/techlfleecesivi2025_1.webp", "../img/proizvodi slike/techlfleecesivi2025_3.webp", "../img/proizvodi slike/techlfleecesivi2025_6.webp", "../img/proizvodi slike/techlfleecesivi2025_7.webp", "../img/proizvodi slike/techlfleecesivi2025_4.webp", "../img/proizvodi slike/techlfleecesivi2025_5.webp"] },
        { ime: "Crna", hex: "#111111", slike: ["../img/proizvodi slike/techlfleececrni2025_1.webp", "../img/proizvodi slike/techlfleececrni2025_2.webp", "../img/proizvodi slike/techlfleececrni2025_3.webp", "../img/proizvodi slike/techlfleececrni2025_4.webp", "../img/proizvodi slike/techlfleececrni2025_5.webp", "../img/proizvodi slike/techlfleececrni2025_6.webp", "../img/proizvodi slike/techlfleececrni2025_7.webp", "../img/proizvodi slike/techlfleececrni2025_8.webp", "../img/proizvodi slike/techlfleececrni2025_9.webp"] }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Ekskluzivni Nike Tech Fleece Joggers komplet u vise razlicitih boja."
    },
    

    "tech-fleece-crno-syna": {
        naziv: "Nike Tech Fleece Crno Syna",
        kategorija: "KOMPLET",
        cena: "6.990 RSD",
        staraCena: "11.990 RSD",
        boje: [
        { ime: "Crno-Syna", hex: "#B76E79", slike: ["../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-front-set.jpg", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-back-set.webp", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-front-set.webp", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-detail-set.jpg", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-tracksuit-hq3748-010-_-hq3749-010-back.webp"] },],
        velicine: ["S", "M", "L", "XL"],
        opis: "Kombinacija crne i sive boje pruža moderan sportski izgled."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. UČITAVANJE PODATAKA O PROIZVODU ---
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const proizvod = proizvodi[id];

    if (!proizvod) {
        const sadrzaj = document.getElementById('proizvod-sadrzaj');
        if (sadrzaj) {
            sadrzaj.innerHTML = `<div class="text-center py-5"><h2 class="text-white">Proizvod nije pronađen</h2><a href="./katalog.html" class="btn btn-warning mt-3">Nazad na katalog</a></div>`;
        }
        return;
    }

    // Prikaz osnovnih tekstualnih informacija
    document.getElementById('proizvod-naziv').innerText = proizvod.naziv;
    document.getElementById('proizvod-kategorija').innerText = proizvod.kategorija;
    document.getElementById('proizvod-cena').innerText = proizvod.cena;
    if (document.getElementById('proizvod-stara-cena')) document.getElementById('proizvod-stara-cena').innerText = proizvod.staraCena || '';
    if (document.getElementById('proizvod-opis')) document.getElementById('proizvod-opis').innerText = proizvod.opis;

    // --- 2. LOGIKA ZA BOJE, SLIKE I STRELICE ---
    const elSlika = document.getElementById('proizvod-slika');
    const btnLevo = document.getElementById('strelica-levo');
    const btnDesno = document.getElementById('strelica-desno');
    const bojaNazivEl = document.getElementById('izabrana-boja-naziv');
    const bojeKontejner = document.getElementById('proizvod-boje');

    let trenutniNizSlika = [];
    let trenutniIndexSlike = 0;
    let izabranaBoja = "";

    function osveziSliku() {
        if (!elSlika || trenutniNizSlika.length === 0) return;
        elSlika.src = trenutniNizSlika[trenutniIndexSlike];
        elSlika.alt = proizvod.naziv;

        // Sakrij strelice ako ima samo 1 slika u odabranoj boji
        if (trenutniNizSlika.length <= 1) {
            if (btnLevo) btnLevo.style.display = 'none';
            if (btnDesno) btnDesno.style.display = 'none';
        } else {
            if (btnLevo) btnLevo.style.display = 'block';
            if (btnDesno) btnDesno.style.display = 'block';
        }
    }

    if (btnDesno) {
        btnDesno.onclick = () => {
            if (trenutniNizSlika.length > 0) {
                trenutniIndexSlike = (trenutniIndexSlike + 1) % trenutniNizSlika.length;
                osveziSliku();
            }
        };
    }

    if (btnLevo) {
        btnLevo.onclick = () => {
            if (trenutniNizSlika.length > 0) {
                trenutniIndexSlike = (trenutniIndexSlike - 1 + trenutniNizSlika.length) % trenutniNizSlika.length;
                osveziSliku();
            }
        };
    }

    // Kreiranje kružića za boje
    if (proizvod.boje && proizvod.boje.length > 0) {
        if (bojeKontejner) bojeKontejner.innerHTML = ''; // Očisti kontejner
        
        proizvod.boje.forEach((bojaObj, index) => {
            const kruzic = document.createElement('div');
            kruzic.className = `boja-kruzic ${index === 0 ? 'active' : ''}`;
            kruzic.style.backgroundColor = bojaObj.hex;
            kruzic.title = bojaObj.ime;

            kruzic.onclick = () => {
                // Skini active klasu sa svih, dodaj na kliknuti
                document.querySelectorAll('.boja-kruzic').forEach(k => k.classList.remove('active'));
                kruzic.classList.add('active');

                // Ažuriraj tekst boje i slike
                if (bojaNazivEl) bojaNazivEl.innerText = bojaObj.ime;
                izabranaBoja = bojaObj.ime;

                if (bojaObj.slike && bojaObj.slike.length > 0) {
                    trenutniNizSlika = bojaObj.slike;
                    trenutniIndexSlike = 0; // Vrati na prvu sliku nove boje
                    osveziSliku();
                }
            };
            
            bojeKontejner.appendChild(kruzic);
            
            // Postavi inicijalno stanje za prvu boju
            if (index === 0) {
                izabranaBoja = bojaObj.ime;
                if (bojaNazivEl) bojaNazivEl.innerText = izabranaBoja;
                if (bojaObj.slike && bojaObj.slike.length > 0) {
                    trenutniNizSlika = bojaObj.slike;
                    osveziSliku();
                }
            }
        });
    }

    // --- 3. ODABIR VELIČINE ---
    let izabranaVelicina = proizvod.velicine[0];
    const velicineKontejner = document.getElementById('proizvod-velicine');
    if (velicineKontejner) {
        velicineKontejner.innerHTML = '';
        proizvod.velicine.forEach((v, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `btn btn-outline-light me-2 mb-2 ${index === 0 ? 'active' : ''}`;
            btn.innerText = v;
            btn.onclick = (e) => {
                e.preventDefault();
                document.querySelectorAll('#proizvod-velicine .btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                izabranaVelicina = v;
            };
            velicineKontejner.appendChild(btn);
        });
    }

    const dodajUKorpu = (preusmeri = false) => {
        let korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
        // Uzimamo prvu sliku trenutno izabranog niza
        const slikaZaKorpu = trenutniNizSlika.length > 0 ? trenutniNizSlika[0] : "";

        const artikal = {
            id: id,
            naziv: proizvod.naziv,
            cena: parseInt(proizvod.cena.replace(/\D/g, '')), // Čisti "6.990 RSD" u broj 6990
            slika: slikaZaKorpu,
            velicina: izabranaVelicina,
            boja: izabranaBoja
        };

        korpa.push(artikal);
        localStorage.setItem('prestigeKorpa', JSON.stringify(korpa));

        // --- DODATO: Automatsko osvežavanje bedža u headeru ---
        const badge = document.getElementById('broj-u-korpi');
        if (badge) {
            badge.innerText = korpa.length;
            badge.style.display = 'inline-block';
        }
        // ------------------------------------------------------

        if (preusmeri) {
            window.location.href = './korpa.html';
        } else {
            alert('Proizvod je uspješno dodan u korpu!');
        }
    };

    const btnDodaj = document.getElementById('dodaj-u-korpu');
    const btnPoruci = document.getElementById('poruci-odmah');

    if (btnDodaj) btnDodaj.onclick = (e) => { e.preventDefault(); dodajUKorpu(false); };
    if (btnPoruci) btnPoruci.onclick = (e) => { e.preventDefault(); dodajUKorpu(true); };
});

// Osvežavanje brojača korpe (ostaje van DOMContentLoaded bloka)
function osveziBrojac() {
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    if (badge) {
        badge.innerText = korpa.length;
        badge.style.display = korpa.length > 0 ? 'inline-block' : 'none';
    }
}

// Efekt skrolanja na headeru
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('skrolovan');
        } else {
            header.classList.remove('skrolovan');
        }
    }
});
