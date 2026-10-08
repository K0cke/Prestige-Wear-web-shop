// 1. BAZA PODATAKA PROIZVODA
const proizvodi = {

    "nike-tech-fleece-joggers--donji-deo": {
        naziv: "Nike Tech Fleece 2025 - Donji deo",
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
            { ime: "Crna", hex: "#111111", slike: ["../img/proizvodi slike/techlfleececrni2025_1.webp", "../img/proizvodi slike/techlfleececrni2025_2.webp", "../img/proizvodi slike/techlfleececrni2025_3.webp", "../img/proizvodi slike/techlfleececrni2025_4.webp", "../img/proizvodi slike/techlfleececrni2025_5.webp", "../img/proizvodi slike/techlfleececrni2025_6.webp", "../img/proizvodi slike/techlfleececrni2025_7.webp", "../img/proizvodi slike/techlfleececrni2025_8.webp", "../img/proizvodi slike/techlfleececrni2025_9.webp"] }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Ekskluzivni Nike Tech Fleece Joggers komplet u vise razlicitih boja."
    },
    
    "tech-fleece-crno-syna": {
        naziv: "Nike Tech Fleece Crno Syna",
        kategorija: "KOMPLET",
        cena: "12.490 RSD",
        staraCena: "21.990 RSD",
        boje: [
            { ime: "Crno-Syna", hex: "#B76E79", slike: ["../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-front-set.jpg", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-back-set.webp", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-front-set.webp", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-detail-set.jpg", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-tracksuit-hq3748-010-_-hq3749-010-back.webp"] }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Kombinacija crne i sive boje pruža moderan sportski izgled."
    },


    "tech-fleece-crno-syna-gornji-deo": {
        naziv: "Nike Tech Fleece Crno Syna - Gornji deo",
        kategorija: "GORNJI DEO",
        cena: "5.990 RSD",
        staraCena: "8.990 RSD",
        boje: [
            { ime: "Crno-Syna", hex: "#B76E79", slike: ["../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-front-set.jpg","../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-hoodie-hq3748-010-model-back-set.webp",] }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Kombinacija crne i sive boje pruža moderan sportski izgled."
    },

    "tech-fleece-crno-syna-donji-deo": {
        naziv: "Nike Tech Fleece Crno Syna - Donji deo",
        kategorija: "DONJI DEO",
        cena: "4.990 RSD",
        staraCena: "8.990 RSD",
        boje: [
            { ime: "Crno-Syna", hex: "#B76E79", slike: ["../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-front-set.webp", "../img/Nike Tech Fleece Syna/syna-world-x-nike-central-cee-tech-fleece-black-sweatpants-hq3749-010-model-back-set.webp"] }
        ],
        velicine: ["S", "M", "L", "XL"],
        opis: "Kombinacija crne i sive boje pruža moderan sportski izgled."
    }

//ovde idu jos proizvodi

};


// 2. SEO FUNKCIJA
function postaviDinamicniSEO(proizvod, urlId) {
    if (!proizvod) return;

    const domenSajta = "https://prestigewearr.netlify.app/"; // Zameni sa svojim domenom kad ga postaviš

    document.title = `${proizvod.naziv} | Prestige Wear`;
    
    const metaOpis = document.querySelector('meta[name="description"]');
    if (metaOpis) metaOpis.setAttribute("content", proizvod.opis);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${proizvod.naziv} | Prestige Wear`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", proizvod.opis);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `${domenSajta}/proizvod.html?id=${urlId}`);

    let apsolutnaPutanjaSlike = "";
    if (proizvod.boje && proizvod.boje.length > 0 && proizvod.boje[0].slike.length > 0) {
        const cistaPutanja = proizvod.boje[0].slike[0].replace('../', '');
        apsolutnaPutanjaSlike = `${domenSajta}/${cistaPutanja}`;
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute("content", apsolutnaPutanjaSlike);
    }

    const cistaCena = proizvod.cena.replace(/\D/g, ''); 

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
            "url": `${domenSajta}/proizvod.html?id=${urlId}`,
            "priceCurrency": "RSD",
            "price": cistaCena,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.textContent = JSON.stringify(schemaPodaci);
    document.head.appendChild(scriptElement);
}

// 3. POZIV SKRIPTE (Na samom dnu, nakon definisane baze i funkcije)
const urlParams = new URLSearchParams(window.location.search);
const proizvodId = urlParams.get('id');
const trenutniProizvod = proizvodi[proizvodId];

if (trenutniProizvod) {
    postaviDinamicniSEO(trenutniProizvod, proizvodId);
}




document.addEventListener('DOMContentLoaded', function() {
        const btnOtvori = document.getElementById('otvori-meni');
        const btnZatvori = document.getElementById('zatvori-meni');
        const overlay = document.getElementById('mobilniOverlay');

        if (btnOtvori && btnZatvori && overlay) {
            // Otvori meni
            btnOtvori.addEventListener('click', function() {
                overlay.classList.add('otvoren');
                // Sprečava skrolovanje stranice u pozadini dok je meni otvoren
                document.body.style.overflow = 'hidden'; 
            });

            // Zatvori meni
            btnZatvori.addEventListener('click', function() {
                overlay.classList.remove('otvoren');
                // Vraća skrolovanje stranice
                document.body.style.overflow = ''; 
            });
        }
    });

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
        if (bojeKontejner) bojeKontejner.innerHTML = ''; 
        
        proizvod.boje.forEach((bojaObj, index) => {
            const kruzic = document.createElement('div');
            kruzic.className = `boja-kruzic ${index === 0 ? 'active' : ''}`;
            kruzic.style.backgroundColor = bojaObj.hex;
            kruzic.title = bojaObj.ime;

            kruzic.onclick = () => {
                document.querySelectorAll('.boja-kruzic').forEach(k => k.classList.remove('active'));
                kruzic.classList.add('active');

                if (bojaNazivEl) bojaNazivEl.innerText = bojaObj.ime;
                izabranaBoja = bojaObj.ime;

                if (bojaObj.slike && bojaObj.slike.length > 0) {
                    trenutniNizSlika = bojaObj.slike;
                    trenutniIndexSlike = 0; 
                    osveziSliku();
                }
            };
            
            bojeKontejner.appendChild(kruzic);
            
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
    const slikaZaKorpu = trenutniNizSlika.length > 0 ? trenutniNizSlika[0] : "";

    const artikal = {
        id: id,
        naziv: proizvod.naziv,
        cena: parseInt(proizvod.cena.replace(/\D/g, '')),
        slika: slikaZaKorpu,
        velicina: izabranaVelicina,
        boja: izabranaBoja
    };

    korpa.push(artikal);
    localStorage.setItem('prestigeKorpa', JSON.stringify(korpa));

    const badge = document.getElementById('broj-u-korpi');
    if (badge) {
        badge.innerText = korpa.length;
        badge.style.display = 'inline-block';
    }

    if (preusmeri) {
        window.location.href = './korpa.html';
    } else {
        showToast('Proizvod je uspešno dodat u korpu!');
    }
};

// Funkcija koja kreira i prikazuje pop-up
function showToast(message) {
    let toast = document.getElementById('cart-toast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cart-toast';
        toast.className = 'cart-toast';
        toast.innerHTML = `
            <span class="cart-toast-icon">✓</span>
            <span id="cart-toast-msg"></span>
        `;
        document.body.appendChild(toast);
    }

    document.getElementById('cart-toast-msg').innerText = message;

    // Prikazivanje sa animacijom
    setTimeout(() => toast.classList.add('show'), 10);

    // Sklanjanje posle 3 sekunde
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

    const btnDodaj = document.getElementById('dodaj-u-korpu');
    const btnPoruci = document.getElementById('poruci-odmah');

    if (btnDodaj) btnDodaj.onclick = (e) => { e.preventDefault(); dodajUKorpu(false); };
    if (btnPoruci) btnPoruci.onclick = (e) => { e.preventDefault(); dodajUKorpu(true); };

    // --- 4. POZIV ZA NASUMICNE PREPORUČENE PROIZVODE ---
    prikaziPreporuceneProizvode(id);
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

// Funkcija za prikaz nasumičnih preporučenih proizvoda (Prilagođena objektu)
function prikaziPreporuceneProizvode(trenutniId) {
    const kontejner = document.getElementById('preporuceni-kontejner');
    if (!kontejner) return;

    // 1. Pretvaramo objekat "proizvodi" u niz (array) tako da zadržimo i njegov ključ kao ID
    let sviKljucevi = Object.keys(proizvodi).filter(kljuc => kljuc !== trenutniId);

    // Ako nema drugih proizvoda, sakrij sekciju
    if (sviKljucevi.length === 0) {
        kontejner.parentElement.parentElement.style.display = 'none';
        return;
    }

    // 2. Nasumično promiješamo ključeve
    sviKljucevi.sort(() => 0.5 - Math.random());

    // 3. Uzimamo maksimalno 4 proizvoda (ili manje ako ih nema 4 u bazi)
    let odabraniKljucevi = sviKljucevi.slice(0, 4);

    let html = '';
    odabraniKljucevi.forEach((kljuc, index) => {
        let item = proizvodi[kljuc];
        // Na mobilnom prikazujemo prva 2, a na desktopu sva 4
        let skrivanjeZaMobilni = (index >= 2) ? 'd-none d-md-block' : '';
        
        // Uzimamo prvu sliku iz prve boje kao sličicu za preporuku
        let slikaProizvoda = "";
        if (item.boje && item.boje.length > 0 && item.boje[0].slike && item.boje[0].slike.length > 0) {
            slikaProizvoda = item.boje[0].slike[0];
        }

        html += `
            <div class="col-6 col-md-3 ${skrivanjeZaMobilni}">
                <div class="card bg-dark border border-secondary border-opacity-25 h-100 rounded-4 overflow-hidden">
                    <a href="./proizvod.html?id=${kljuc}">
                        <img src="${slikaProizvoda}" class="card-img-top object-fit-cover" alt="${item.naziv}" style="height: 220px;">
                    </a>
                    <div class="card-body d-flex flex-column p-3">
                        <h5 class="card-title text-white fs-6 fw-bold mb-1">${item.naziv}</h5>
                        <p class="card-text fw-bold mt-auto mb-2" style="color: var(--gold-main);">${item.cena}</p>
                        <a href="./proizvod.html?id=${kljuc}" class="btn btn-outline-warning btn-sm w-100 fw-bold">Pogledaj</a>
                    </div>
                </div>
            </div>
        `;
    });

    kontejner.innerHTML = html;
}


let html = '';

korpa.forEach((item, index) => {
    html += `
        <div class="col-12">
            <div class="card bg-dark border border-secondary border-opacity-25 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between">
                
                <!-- Celokupan levi i srednji deo je link ka stranici proizvoda -->
                <a href="./proizvod.html?id=${item.id}" class="d-flex align-items-center text-decoration-none text-white flex-grow-1">
                    <img src="${item.slika}" alt="${item.naziv}" class="rounded-3 object-fit-cover me-3" style="width: 70px; height: 70px;">
                    <div>
                        <h5 class="fs-6 fw-bold mb-1">${item.naziv}</h5>
                        <p class="text-light opacity-75 small mb-0">Boja: ${item.boja} | Veličina: ${item.velicina}</p>
                    </div>
                </a>

                <!-- Desni deo: Cena i dugme za brisanje (odvojeno od linka) -->
                <div class="d-flex align-items-center gap-4 ms-3">
                    <span class="fw-bold text-nowrap" style="color: var(--gold-main);">${item.cena.toLocaleString()} RSD</span>
                    <button onclick="ukloniIzKorpe(${index})" class="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>

            </div>
        </div>
    `;
});

document.getElementById('korpa-sadrzaj').innerHTML = html;



/*Skripta za kolacice (cookies) - prihvatanje ili odbijanje */
    document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Proveri da li postoji sačuvan status (bilo da je prihvaćeno ili odbijeno)
    if (!localStorage.getItem("statusKolacica")) {
      cookieBanner.classList.remove("d-none"); // Prikaži baner
    }

    // Funkcija za sakrivanje banera uz animaciju gubljenja (opciono, daje lepši osećaj)
    function sakrijBaner() {
      cookieBanner.style.opacity = '0';
      setTimeout(() => cookieBanner.classList.add("d-none"), 300);
    }

    // Ako klikne Prihvati
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("statusKolacica", "prihvaceno");
      cookieBanner.style.transition = "opacity 0.3s ease";
      sakrijBaner();
    });

    // Ako klikne Odbij
    rejectBtn.addEventListener("click", function () {
      localStorage.setItem("statusKolacica", "odbijeno");
      cookieBanner.style.transition = "opacity 0.3s ease";
      sakrijBaner();
    });
  });