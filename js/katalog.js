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
