// 1. BAZA PODATAKA PROIZVODA
const proizvodi = {
    "tech-fleece-reflective-beli": {
        naziv: "Nike Tech Fleece Reflective Beli",
        kategorija: "KOMPLET",
        cena: "7.490 RSD",
        staraCena: "12.990 RSD",
        slika: "../img/reflectivetechbeli.webp",
        boje: [{ ime: "Bela", hex: "#ffffff" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Ekskluzivni Nike Tech Fleece komplet u beloj boji sa reflektujućim detaljima."
    },
    "tech-fleece-reflective-crni": {
        naziv: "Nike Tech Fleece Reflective Crni",
        kategorija: "KOMPLET",
        cena: "7.490 RSD",
        staraCena: "12.990 RSD",
        slika: "../img/reflectivetechcrni.webp",
        boje: [{ ime: "Crna", hex: "#000000" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Ekskluzivni Nike Tech Fleece komplet u crnoj boji sa reflektujućim elementima."
    },
    "tech-fleece-crni": {
        naziv: "Nike Tech Fleece Crni",
        kategorija: "KOMPLET",
        cena: "6.990 RSD",
        staraCena: "11.990 RSD",
        slika: "../img/nike tech fleece crni.webp",
        boje: [{ ime: "Crna", hex: "#000000" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Klasični crni Nike Tech Fleece komplet."
    },
    "tech-fleece-crno-sivi": {
        naziv: "Nike Tech Fleece Crno Sivi",
        kategorija: "KOMPLET",
        cena: "6.990 RSD",
        staraCena: "11.990 RSD",
        slika: "../img/techfleececrnosivikomplet.jpg",
        boje: [{ ime: "Crno-Siva", hex: "#4b5563" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Kombinacija crne i sive boje pruža moderan sportski izgled."
    },
    "fleece-sivi": {
        naziv: "Nike Fleece Sivi",
        kategorija: "KOMPLET",
        cena: "6.490 RSD",
        staraCena: "10.990 RSD",
        slika: "../img/techfleecesivijkomplet.jpg",
        boje: [{ ime: "Siva", hex: "#9ca3af" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Sivi Fleece komplet izrađen od pamučnog materijala."
    },
    "tech-fleece-crni-gornji": {
        naziv: "Nike Tech Fleece Crni Gornji Deo",
        kategorija: "GORNJI DEO",
        cena: "3.990 RSD",
        staraCena: "6.490 RSD",
        slika: "../img/nike tech fleece gornji deo.jpg",
        boje: [{ ime: "Crna", hex: "#000000" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Gornji deo Nike Tech Fleece dukserice."
    },
    "tech-fleece-crno-sivi-gornji": {
        naziv: "Nike Tech Fleece Crno Sivi Gornji Deo",
        kategorija: "GORNJI DEO",
        cena: "3.990 RSD",
        staraCena: "6.490 RSD",
        slika: "../img/techfleececrnosivigornji.jpg",
        boje: [{ ime: "Crno-Siva", hex: "#4b5563" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Dukserica u kombinaciji crne i sive boje."
    },
    "tech-fleece-crno-sivi-donji": {
        naziv: "Nike Tech Fleece Crno Sivi Donji Deo",
        kategorija: "DONJI DEO",
        cena: "3.490 RSD",
        staraCena: "5.990 RSD",
        slika: "../img/techfleececrnosividonjideo.jpg",
        boje: [{ ime: "Crno-Siva", hex: "#4b5563" }],
        velicine: ["S", "M", "L", "XL"],
        opis: "Donji deo trenerke sa suženim nogavicama."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // --- 2. LOGIKA ZA HAMBURGER OVERLAY MENI ---
    const btnOtvori = document.getElementById('otvori-meni') || document.querySelector('.hamburger-btn');
    const btnZatvori = document.getElementById('zatvori-meni') || document.querySelector('.zatvori-meni');
    const overlay = document.getElementById('mobilniOverlay') || document.querySelector('.overlay-meni');

    if (btnOtvori && overlay) {
        btnOtvori.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('otvoren');
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnZatvori && overlay) {
        btnZatvori.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.remove('otvoren');
            document.body.style.overflow = '';
        });
    }

    // --- 3. UČITAVANJE PODATAKA O PROIZVODU ---
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const proizvod = proizvodi[id];

    if (!proizvod) {
        const sadrzaj = document.getElementById('proizvod-sadrzaj');
        if (sadrzaj) {
            sadrzaj.innerHTML = `<div class="text-center py-5"><h2 class="text-white">Proizvod nije pronađen</h2><a href="./katalog.html" class="btn btn-warning mt-3">Nazad na katalog</a></div>`;
        }
        osveziBrojac();
        return;
    }

    // Prikaz osnovnih informacija
    const elNaziv = document.getElementById('proizvod-naziv');
    const elKategorija = document.getElementById('proizvod-kategorija');
    const elCena = document.getElementById('proizvod-cena');
    const elStaraCena = document.getElementById('proizvod-stara-cena');
    const elOpis = document.getElementById('proizvod-opis');
    const elSlika = document.getElementById('proizvod-slika');

    if (elNaziv) elNaziv.innerText = proizvod.naziv;
    if (elKategorija) elKategorija.innerText = proizvod.kategorija;
    if (elCena) elCena.innerText = proizvod.cena;
    if (elStaraCena) elStaraCena.innerText = proizvod.staraCena || '';
    if (elOpis) elOpis.innerText = proizvod.opis;
    if (elSlika) {
        elSlika.src = proizvod.slika;
        elSlika.alt = proizvod.naziv;
    }

    // Odabir veličine
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

    // Odabir boje
    let izabranaBoja = proizvod.boje && proizvod.boje.length > 0 ? proizvod.boje[0].ime : "Standardna";
    const bojaNazivEl = document.getElementById('izabrana-boja-naziv');
    if (bojaNazivEl) bojaNazivEl.innerText = izabranaBoja;

    // Funkcija za dodavanje u korpu
    const dodajUKorpu = (preusmeri = false) => {
        let korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];

        const artikal = {
            id: id,
            naziv: proizvod.naziv,
            cena: proizvod.cena,
            slika: proizvod.slika,
            velicina: izabranaVelicina,
            boja: izabranaBoja
        };

        korpa.push(artikal);
        localStorage.setItem('prestigeKorpa', JSON.stringify(korpa));

        osveziBrojac();

        if (preusmeri) {
            window.location.href = './korpa.html';
        } else {
            alert('Proizvod je uspešno dodan u korpu!');
        }
    };

    // Povezivanje dugmadi za korpu
    const btnDodaj = document.getElementById('dodaj-u-korpu');
    const btnPoruci = document.getElementById('poruci-odmah');

    if (btnDodaj) {
        btnDodaj.onclick = (e) => {
            e.preventDefault();
            dodajUKorpu(false);
        };
    }

    if (btnPoruci) {
        btnPoruci.onclick = (e) => {
            e.preventDefault();
            dodajUKorpu(true);
        };
    }

    osveziBrojac();
});

// Osvežavanje brojača korpe
function osveziBrojac() {
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    if (badge) {
        badge.innerText = korpa.length;
        badge.style.display = korpa.length > 0 ? 'inline-block' : 'none';
    }
}

// Efekat skrolovanja na headeru
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
