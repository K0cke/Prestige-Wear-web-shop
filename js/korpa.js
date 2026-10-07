// Učitavanje korpe iz localStorage-a
let korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];

// Funkcija za prikazivanje sadržaja korpe
function prikaziKorpu() {
    const korpaContainer = document.getElementById('korpa-sadrzaj');
    const checkoutContainer = document.getElementById('korpa-checkout');
    const ukupnaCenaEl = document.getElementById('korpa-ukupna-cena');

    if (!korpaContainer) return;

    // Ako je korpa prazna
    if (korpa.length === 0) {
        korpaContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3 class="text-white mb-3">Vaša korpa je trenutno prazna.</h3>
                <p class="text-light opacity-75 mb-4">Izaberite neke od naših vrhunskih modela iz kataloga.</p>
                <a href="./katalog.html" class="btn btn-warning px-4 py-2 fw-bold text-uppercase">Idi na katalog</a>
            </div>
        `;
        if (checkoutContainer) checkoutContainer.style.display = 'none';
        return;
    }

    // Ako ima proizvoda u korpi
    let html = '';
    let ukupnaCena = 0;

    korpa.forEach((item, index) => {
        // Provjera da li je cena broj ili string
        let cenaBroj = typeof item.cena === 'number' 
            ? item.cena 
            : parseInt(String(item.cena).replace(/\D/g, '')) || 0;
            
        ukupnaCena += cenaBroj;

        let formatiranaCena = cenaBroj.toLocaleString("sr-RS") + " RSD";

        html += `
            <div class="col-12">
                <div class="p-3 rounded-4 bg-dark border border-secondary border-opacity-25 d-flex align-items-center justify-content-between flex-wrap gap-3">
                    
                    <!-- Slika i podaci (link ka detaljima proizvoda) -->
                    <a href="./proizvod.html?id=${item.id || ''}" class="d-flex align-items-center gap-3 text-decoration-none flex-grow-1">
                        <img src="${item.slika}" alt="${item.naziv}" class="rounded-3 object-fit-cover" style="width: 80px; height: 80px;">
                        <div>
                            <h5 class="text-white mb-1 fw-bold fs-6">${item.naziv}</h5>
                            <p class="text-light opacity-75 small mb-0">
                                Boja: <strong class="text-white">${item.boja}</strong> | 
                                Veličina: <strong class="text-white">${item.velicina}</strong>
                            </p>
                        </div>
                    </a>

                    <!-- Cena i dugme za brisanje -->
                    <div class="d-flex align-items-center gap-4 ms-auto">
                        <span class="fs-5 fw-bold text-nowrap" style="color: var(--gold-main);">${formatiranaCena}</span>
                        <button class="btn btn-outline-danger btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;" onclick="ukloniIzKorpe(${index})" title="Ukloni artikal">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>

                </div>
            </div>
        `;
    });

    korpaContainer.innerHTML = html;
    if (ukupnaCenaEl) ukupnaCenaEl.innerText = ukupnaCena.toLocaleString("sr-RS") + " RSD";
    if (checkoutContainer) checkoutContainer.style.display = 'block';
}

// Funkcija za brisanje pojedinačnog artikla
window.ukloniIzKorpe = function(index) {
    korpa.splice(index, 1);
    localStorage.setItem('prestigeKorpa', JSON.stringify(korpa));
    prikaziKorpu();
    osveziBedz();
};

// Funkcija za osvežavanje broja artikala u headeru
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

// Inicijalizacija pri učitavanju DOM-a
document.addEventListener("DOMContentLoaded", () => {
    prikaziKorpu();
    osveziBedz();

    // Mobilni meni
    const btnOtvori = document.getElementById('otvori-meni');
    const btnZatvori = document.getElementById('zatvori-meni');
    const overlay = document.getElementById('mobilniOverlay');

    if (btnOtvori && btnZatvori && overlay) {
        btnOtvori.addEventListener('click', () => {
            overlay.classList.add('otvoren');
            document.body.style.overflow = 'hidden';
        });

        btnZatvori.addEventListener('click', () => {
            overlay.classList.remove('otvoren');
            document.body.style.overflow = '';
        });
    }
});

// Promena izgleda headera pri skrolovanju
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('skrolovan');
        } else {
            header.classList.remove('skrolovan');
        }
    }
});



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