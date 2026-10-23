document.addEventListener("DOMContentLoaded", () => {
    // 1. Brojač u korpi
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    if (badge && korpa.length > 0) {
        badge.innerText = korpa.length;
        badge.style.display = 'inline-block';
    }

    // 2. Slanje kontakt forme na Google Apps Script
    const kontaktForma = document.getElementById('google-sheet-forma');
    const submitBtn = document.getElementById('submit-btn');
    const scriptURL = "https://script.google.com/macros/s/AKfycbyllkuX8ZgwP6YQ20umhMDVffed2zPtZbx20dbCDB4UK3sceWlrBKZjPpa5YRv9V2Fw/exec";

    if (kontaktForma) {
        kontaktForma.addEventListener('submit', (e) => {
            e.preventDefault();

            const selektovaniRazlog = document.querySelector('input[name="Razlog"]:checked');
            const razlogVrednost = selektovaniRazlog ? selektovaniRazlog.value : "Nije izabrano";

            const ime = kontaktForma.querySelector('input[name="Ime"]').value;
            const prezime = kontaktForma.querySelector('input[name="Prezime"]').value;
            const email = kontaktForma.querySelector('input[name="Email"]').value;
            const poruka = kontaktForma.querySelector('textarea[name="Poruka"]').value;

            const podaci = {
                tip: "kontakt",
                ime: `${ime} ${prezime}`,
                email: email,
                poruka: `[Razlog: ${razlogVrednost}]\n${poruka}`
            };

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "Slanje...";
            }

            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(podaci)
            })
            .then(() => {
                // POZIVAMO TOAST OVDJE
                showToast("Hvala vam! Vaša poruka je uspešno poslata.");
                kontaktForma.reset();
            })
            .catch(error => {
                console.error('Greška:', error);
                showToast("Došlo je do greške pri slanju poruke.");
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Pošalji";
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

// Toast funkcija izdvojena skroz van
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