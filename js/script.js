window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('skrolovan');
    } else {
        header.classList.remove('skrolovan');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const groups = document.querySelectorAll('.product-group');
    let trenutniIndex = 0;
    let autoRotateInterval;

    if (groups.length === 0) return;

    function prikaziGrupu(index) {
        groups.forEach((group, i) => {
            if (i === index) {
                group.classList.remove('d-none');
            } else {
                group.classList.add('d-none');
            }
        });
    }

    function sledecaGrupa() {
        trenutniIndex = (trenutniIndex + 1) % groups.length;
        prikaziGrupu(trenutniIndex);
    }

    function pokreniTajmer() {
        clearInterval(autoRotateInterval);
        autoRotateInterval = setInterval(() => {
            sledecaGrupa();
        }, 30000);
    }

    // Klik na dugme menja grupu i resetuje tajmer na 30 sekundi
    // Proveri da li ti je id dugmeta u HTML-u tačno 'btn-promeni'
    const btnPromeni = document.getElementById('btn-promeni');
    if (btnPromeni) {
        btnPromeni.addEventListener('click', () => {
            sledecaGrupa();
            pokreniTajmer();
        });
    }

    // Inicijalno pokretanje
    prikaziGrupu(trenutniIndex);
    pokreniTajmer();
});




document.addEventListener("DOMContentLoaded", () => {
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    
    if (badge && korpa.length > 0) {
        badge.innerText = korpa.length;
        badge.style.display = 'inline-block';
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
    




