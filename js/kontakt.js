window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('skrolovan');
    } else {
        header.classList.remove('skrolovan');
    }
});
    
    
    
    // Ovde nalepi dugački link koji dobijete nakon Deploy-a
    const scriptURL = 'UBACI_WEB_APP_URL_HERE'; 
    
    const form = document.getElementById('google-sheet-forma');
    const btn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            const originalBtnText = btn.innerHTML;
            btn.innerHTML = "Slanje...";
            btn.disabled = true;

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => response.json())
                .then(data => {
                    alert("Hvala! Poruka je uspešno poslata.");
                    form.reset();
                    btn.innerHTML = originalBtnText;
                    btn.disabled = false;
                })
                .catch(error => {
                    alert("Došlo je do greške prilikom slanja. Pokušajte ponovo.");
                    console.error('Greška!', error.message);
                    btn.innerHTML = originalBtnText;
                    btn.disabled = false;
                });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    
    if (badge && korpa.length > 0) {
        badge.innerText = korpa.length;
        badge.style.display = 'inline-block';
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Prilagodi klasu tvojim dugmićima za razlog
    const dugmici = document.querySelectorAll('.odaberite-razlog-btn, .razlog-btn'); 
    const skrivenoPolje = document.getElementById('izabrani-razlog');

    dugmici.forEach(btn => {
        btn.addEventListener('click', () => {
            // Sklanjamo 'active' sa svih ostalih dugmadi
            dugmici.forEach(b => b.classList.remove('active'));
            
            // Dodajemo 'active' na kliknuto dugme
            btn.classList.add('active');

            // Upisujemo tekst sa dugmeta u skriveno polje
            if (skrivenoPolje) {
                skrivenoPolje.value = btn.innerText.trim();
            }
        });
    });
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


