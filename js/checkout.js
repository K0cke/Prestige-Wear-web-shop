document.addEventListener("DOMContentLoaded", () => {
    // 1. Konfiguracija i učitavanje iz LocalStorage
    const CENA_DOSTAVE = 550; 
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const stavkeKontejner = document.getElementById('checkout-stavke');
    const artikliUkupnoEl = document.getElementById('checkout-artikli-ukupno');
    const dostavaEl = document.getElementById('checkout-dostava');
    const ukupnoEl = document.getElementById('checkout-ukupno');
    const badge = document.getElementById('broj-u-korpi');

    if (badge) {
        badge.innerText = korpa.length;
        badge.style.display = korpa.length > 0 ? 'inline-block' : 'none';
    }

    // Prikaz ako je korpa prazna
    if (!korpa || korpa.length === 0) {
        if (stavkeKontejner) {
            stavkeKontejner.innerHTML = `
                <p class="text-white opacity-75 my-3">Vaša korpa je trenutno prazna.</p>
                <a href="./katalog.html" class="btn btn-outline-warning btn-sm">Vratite se u katalog</a>
            `;
        }
        if (artikliUkupnoEl) artikliUkupnoEl.innerText = "0 RSD";
        if (dostavaEl) dostavaEl.innerText = "0 RSD";
        if (ukupnoEl) ukupnoEl.innerText = "0 RSD";
    } else {
        // Generisanje prikaza za svaki artikal
        let htmlStavke = '';
        let cenaArtikala = 0;

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
                        ${cenaBroj.toLocaleString()} RSD
                    </div>
                </div>
            `;
        });

        let ukupnoZaUplatu = cenaArtikala + CENA_DOSTAVE;

        if (stavkeKontejner) stavkeKontejner.innerHTML = htmlStavke;
        if (artikliUkupnoEl) artikliUkupnoEl.innerText = cenaArtikala.toLocaleString() + " RSD";
        if (dostavaEl) dostavaEl.innerText = CENA_DOSTAVE.toLocaleString() + " RSD";
        if (ukupnoEl) ukupnoEl.innerText = ukupnoZaUplatu.toLocaleString() + " RSD";
    }

    // 2. Obrada slanja forme na Google Apps Script
    const checkoutForma = document.getElementById('checkout-forma');
    const scriptURL = "https://script.google.com/macros/s/AKfycbyllkuX8ZgwP6YQ20umhMDVffed2zPtZbx20dbCDB4UK3sceWlrBKZjPpa5YRv9V2Fw/exec";

    if (checkoutForma) {
        checkoutForma.addEventListener('submit', (e) => {
            e.preventDefault();

            if (korpa.length === 0) {
                showToast('Vaša korpa je prazna!');
                setTimeout(() => { window.location.href = './katalog.html'; }, 1500);
                return;
            }

            const ime = document.getElementById('ime').value;
            const prezime = document.getElementById('prezime').value;
            const adresa = document.getElementById('adresa').value;
            const grad = document.getElementById('grad').value;
            const postanskiBroj = document.getElementById('postanski-broj').value;
            const telefon = document.getElementById('telefon').value;
            const email = document.getElementById('email').value;
            const napomena = document.getElementById('napomena') ? document.getElementById('napomena').value : "";

            const cenaArtikala = korpa.reduce((sum, item) => sum + (parseInt(String(item.cena).replace(/\D/g, '')) || 0), 0);
            const ukupnaCenaSaDostavom = cenaArtikala + CENA_DOSTAVE;

            const podaci = {
                tip: "porudzbina",
                ime: ime,
                prezime: prezime,
                telefon: telefon,
                adresa: `${adresa}, ${postanskiBroj}`,
                grad: grad,
                napomena: `[Email kupca: ${email}] ${napomena}`,
                artikli: korpa,
                ukupno: `${ukupnaCenaSaDostavom.toLocaleString()} RSD (uključena dostava)`
            };

            const submitBtn = checkoutForma.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "OBRAĐIVANJE PORUDŽBINE...";
            }

            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(podaci)
            })
            .then(() => {
                showToast("Hvala vam! Vaša porudžbina je uspešno poslata.");
                localStorage.removeItem('prestigeKorpa');
                
                // Čekamo 1.8 sekundi da korisnik vidi toast pre nego što ga preusmerimo
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 1800);
            })
            .catch(error => {
                console.error('Greška:', error);
                showToast("Došlo je do greške pri slanju porudžbine.");
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = "POTVRDI PORUDŽBINU";
                }
            });
        });
    }

    // 3. Mobilni meni
    const btnOtvori = document.getElementById('otvori-meni');
    const btnZatvori = document.getElementById('zatvori-meni');
    const overlay = document.getElementById('mobilniOverlay');

    if (btnOtvori && btnZatvori && overlay) {
        btnOtvori.addEventListener('click', function() {
            overlay.classList.add('otvoren');
            document.body.style.overflow = 'hidden'; 
        });

        btnZatvori.addEventListener('click', function() {
            overlay.classList.remove('otvoren');
            document.body.style.overflow = ''; 
        });
    }

    // 4. Baner za kolačiće
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    if (cookieBanner && acceptBtn && rejectBtn) {
        if (!localStorage.getItem("statusKolacica")) {
            cookieBanner.classList.remove("d-none");
        }

        function sakrijBaner() {
            cookieBanner.style.opacity = '0';
            setTimeout(() => cookieBanner.classList.add("d-none"), 300);
        }

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("statusKolacica", "prihvaceno");
            cookieBanner.style.transition = "opacity 0.3s ease";
            sakrijBaner();
        });

        rejectBtn.addEventListener("click", function () {
            localStorage.setItem("statusKolacica", "odbijeno");
            cookieBanner.style.transition = "opacity 0.3s ease";
            sakrijBaner();
        });
    }
});


function showToast(poruka) {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'custom-toast';
        toast.className = 'cart-toast';
        toast.innerHTML = `
            <div class="cart-toast-icon">✓</div>
            <span class="cart-toast-msg">${poruka}</span>
        `;
        document.body.appendChild(toast);
    } else {
        toast.querySelector('.cart-toast-msg').innerText = poruka;
    }

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


// Efekat skrolovanja zaglavlja
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