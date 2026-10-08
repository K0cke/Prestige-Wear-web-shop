// Ažuriranje broja artikala u korpi i inicijalizacija menija
document.addEventListener("DOMContentLoaded", () => {
    // 1. KORPA
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    
    if (badge && korpa.length > 0) {
        badge.innerText = korpa.length;
        badge.style.display = 'inline-block';
    }

    // 2. HAMBURGER OVERLAY MENI
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
});

// --- FILTRIRANJE I SORTIRANJE PROIZVODA ---
const kartice = [...document.querySelectorAll(".proizvod-kartica")];
const pretraga = document.getElementById("pretraga");
const kategorija = document.getElementById("kategorija");
const sortiranje = document.getElementById("sortiranje");
const grid = document.getElementById("proizvodi-grid");
const brojProizvoda = document.getElementById("broj-proizvoda");
const nemaRezultata = document.getElementById("nema-rezultata");

function primeniFiltere() {
    if (!pretraga || !kategorija || !sortiranje) return;

    const upit = pretraga.value.trim().toLocaleLowerCase("sr");
    const izabranaKategorija = kategorija.value;

    const vidljive = kartice.filter((kartica) => {
        const odgovaraNaziv = kartica.dataset.name.toLocaleLowerCase("sr").includes(upit);
        const odgovaraKategorija = izabranaKategorija === "sve" || kartica.dataset.category === izabranaKategorija;

        kartica.hidden = !(odgovaraNaziv && odgovaraKategorija);
        return !kartica.hidden;
    });

    if (sortiranje.value === "rastuce") {
        vidljive.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
    } else if (sortiranje.value === "opadajuce") {
        vidljive.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
    } else if (sortiranje.value === "naziv") {
        vidljive.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name, "sr"));
    }

    vidljive.forEach((kartica) => grid.appendChild(kartica));

    if (brojProizvoda) {
        brojProizvoda.textContent = `${vidljive.length} ${vidljive.length === 1 ? "proizvod" : "proizvoda"}`;
    }
    if (nemaRezultata) {
        nemaRezultata.hidden = vidljive.length !== 0;
    }
}

if (pretraga && kategorija && sortiranje) {
    pretraga.addEventListener("input", primeniFiltere);
    kategorija.addEventListener("change", primeniFiltere);
    sortiranje.addEventListener("change", primeniFiltere);
}

// --- EFEKAT SKROLOVANJA ZA HEADER ---
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("skrolovan", window.scrollY > 30);
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


document.addEventListener('DOMContentLoaded', () => {
    const sviKruzici = document.querySelectorAll('.katalog-boje .boja-kruzic');

    sviKruzici.forEach(kruzic => {
        kruzic.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            // 1. Pronalazi roditeljsku karticu (.proizvod-kartica)
            const kartica = this.closest('.proizvod-kartica');
            if (!kartica) return;

            // 2. Pronalazi sliku unutar .slika-proizvoda taga
            const slika = kartica.querySelector('.slika-proizvoda img');
            const novaSlikaSrc = this.getAttribute('data-slika');

            // 3. Menja izvor slike
            if (slika && novaSlikaSrc) {
                slika.src = novaSlikaSrc;
            }

            // 4. Ažurira active klasu za kružiće u toj kartici
            const kruziciUovojKartici = kartica.querySelectorAll('.boja-kruzic');
            kruziciUovojKartici.forEach(k => k.classList.remove('active'));
            this.classList.add('active');
        });
    });
});