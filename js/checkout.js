document.addEventListener("DOMContentLoaded", () => {
    // === OVDE PODEŠAVAŠ CENU DOSTAVE ===
    const CENA_DOSTAVE = 550; 

    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const stavkeKontejner = document.getElementById('checkout-stavke');
    const artikliUkupnoEl = document.getElementById('checkout-artikli-ukupno');
    const dostavaEl = document.getElementById('checkout-dostava');
    const ukupnoEl = document.getElementById('checkout-ukupno');

    // Ako u korpi nema elemenata
    if (!korpa || korpa.length === 0) {
        if (stavkeKontejner) {
            stavkeKontejner.innerHTML = `
                <p class="text-white opacity-75 my-3">Vaša korpa je trenutno prazna.</p>
                <a href="./katalog.html" class="btn btn-outline-warning btn-sm">Vratite se u katalog</a>
            `;
        }
        return;
    }

    let htmlStavke = '';
    let cenaArtikala = 0;

    // Generisanje prikaza za svaki artikal
    korpa.forEach(item => {
        let cenaBroj = parseInt(String(item.cena).replace(/\D/g, '')) || 0;
        cenaArtikala += cenaBroj;

        htmlStavke += `
            <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                <img src="${item.slika}" alt="${item.naziv}" class="rounded" style="width: 60px; height: 60px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h6 class="mb-1 text-white">${item.naziv}</h6>
                    <small class="text-light opacity-75">Vel: ${item.velicina} | Boja: ${item.boja || '-'}</small>
                </div>
                <div class="text-end text-warning fw-bold">
                    ${item.cena}
                </div>
            </div>
        `;
    });

    let ukupnoZaUplatu = cenaArtikala + CENA_DOSTAVE;

    // Siguran ispis u HTML
    if (stavkeKontejner) stavkeKontejner.innerHTML = htmlStavke;
    if (artikliUkupnoEl) artikliUkupnoEl.innerText = cenaArtikala.toLocaleString() + " RSD";
    if (dostavaEl) dostavaEl.innerText = CENA_DOSTAVE.toLocaleString() + " RSD";
    if (ukupnoEl) ukupnoEl.innerText = ukupnoZaUplatu.toLocaleString() + " RSD";

    // Obrada slanja forme
    const forma = document.getElementById('checkout-forma');
    if (forma) {
        forma.addEventListener('submit', (e) => {
            e.preventDefault();

            alert("Hvala Vam! Vaša porudžbina je uspešno primljena.");
            localStorage.removeItem('prestigeKorpa');
            window.location.href = '../index.html';
        });
    }
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('skrolovan');
    } else {
        header.classList.remove('skrolovan');
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
