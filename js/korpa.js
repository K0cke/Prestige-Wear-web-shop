// Učitavanje korpe iz localStorage-a
let korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
const korpaContainer = document.getElementById('korpa-sadrzaj');
const checkoutContainer = document.getElementById('korpa-checkout');
const ukupnaCenaEl = document.getElementById('korpa-ukupna-cena');

function prikaziKorpu() {
    // Ako je korpa prazna
    if (korpa.length === 0) {
        if(korpaContainer) {
            korpaContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3 class="text-white mb-3">Vaša korpa je trenutno prazna.</h3>
                    <p class="text-light opacity-75 mb-4">Izaberite neke od naših vrhunskih modela iz kataloga.</p>
                    <a href="./katalog.html" class="btn btn-warning px-4 py-2 fw-bold text-uppercase">Idi na katalog</a>
                </div>
            `;
        }
        if(checkoutContainer) checkoutContainer.style.display = 'none';
        return;
    }

    // Ako ima proizvoda
    let html = '';
    let ukupnaCena = 0;

    korpa.forEach((item, index) => {
        // Provjera je li cijena već čisti broj (iz novog koda) ili string (iz starijih testova)
        let cenaBroj = typeof item.cena === 'string' ? parseInt(item.cena.replace(/\D/g, '')) : parseInt(item.cena);
        ukupnaCena += (cenaBroj || 0);

        // Formatiramo cijenu natrag u "X.XXX RSD" za lijep prikaz
        let formatiranaCena = cenaBroj.toLocaleString("sr-RS") + " RSD";

        html += `
            <div class="col-12">
                <div class="p-3 rounded-4 bg-dark border border-secondary border-opacity-25 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    
                    <!-- Slika i osnovni podaci -->
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.slika}" alt="${item.naziv}" class="rounded-3 object-fit-cover" style="width: 80px; height: 80px;">
                        <div>
                            <h5 class="text-white mb-1 fw-bold">${item.naziv}</h5>
                            <p class="text-light opacity-75 small mb-0">
                                Boja: <strong class="text-white">${item.boja}</strong> | 
                                Veličina: <strong class="text-white">${item.velicina}</strong>
                            </p>
                        </div>
                    </div>

                    <!-- Cena i dugme za brisanje -->
                    <div class="d-flex align-items-center gap-4">
                        <span class="fs-5 fw-bold" style="color: var(--gold-main);">${formatiranaCena}</span>
                        <button class="btn btn-outline-danger btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;" onclick="ukloniIzKorpe(${index})" title="Ukloni artikal">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>

                </div>
            </div>
        `;
    });

    if(korpaContainer) korpaContainer.innerHTML = html;
    if(ukupnaCenaEl) ukupnaCenaEl.innerText = ukupnaCena.toLocaleString("sr-RS") + " RSD";
    if(checkoutContainer) checkoutContainer.style.display = 'block';
}

// Funkcija za brisanje pojedinačnog artikla
window.ukloniIzKorpe = function(index) {
    korpa.splice(index, 1); // Izbaci iz niza
    localStorage.setItem('prestigeKorpa', JSON.stringify(korpa)); // Sačuvaj osveženo stanje
    prikaziKorpu(); // Osveži prikaz
    osveziBedz(); // Odmah osveži brojku u headeru
}

// Funkcija za osvežavanje ikonice u headeru
function osveziBedz() {
    const trenutnaKorpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    
    if (badge) {
        if (trenutnaKorpa.length > 0) {
            badge.innerText = trenutnaKorpa.length;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Pokreni prikaz pri učitavanju stranice
prikaziKorpu();

document.addEventListener("DOMContentLoaded", () => {
    osveziBedz();
});

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


    // Primer unutar petlje koja iscrtava proizvode u korpi (npr. korpa.js)
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

    