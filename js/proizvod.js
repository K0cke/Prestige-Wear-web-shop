// Baza proizvoda sa podrškom za više boja i slika
const bazaProizvoda = {
    1: {
        naziv: "Prestige Oversized Duks",
        cena: "4.500 RSD",
        staraCena: "6.000 RSD",
        opis: "Vrhunski pamučni duks izrađen od najkvalitetnijeg materijala. Dizajniran za maksimalnu udobnost i moderan izgled.",
        velicine: ["S", "M", "L", "XL"],
        boje: [
            {
                naziv: "Crna",
                hex: "#000000",
                slike: ["../img/duks-crna-1.jpg", "../img/duks-crna-2.jpg", "../img/duks-crna-3.jpg"]
            },
            {
                naziv: "Zlatna / Bež",
                hex: "#c9933b",
                slike: ["../img/duks-zlatna-1.jpg", "../img/duks-zlatna-2.jpg", "../img/duks-zlatna-3.jpg"]
            }
        ]
    },
    2: {
        naziv: "Prestige Premium Majica",
        cena: "2.500 RSD",
        staraCena: "",
        opis: "Klasična majica savremenog kroja. Izuzetno prijatna na koži.",
        velicine: ["M", "L", "XL"],
        boje: [
            {
                naziv: "Bela",
                hex: "#ffffff",
                slike: ["../img/majica-bela-1.jpg", "../img/majica-bela-2.jpg"]
            }
        ]
    }
};

// Preuzimanje ID-ja iz URL-a
const urlParams = new URLSearchParams(window.location.search);
const idProizvoda = urlParams.get('id');

if (bazaProizvoda[idProizvoda]) {
    const proizvod = bazaProizvoda[idProizvoda];

    document.title = `${proizvod.naziv} | Prestige Wear`;
    document.getElementById('proizvod-naziv').innerText = proizvod.naziv;
    document.getElementById('proizvod-cena').innerText = proizvod.cena;
    document.getElementById('proizvod-opis').innerText = proizvod.opis;

    // Stara cena (ako postoji)
    const staraCenaEl = document.getElementById('proizvod-stara-cena');
    if (proizvod.staraCena) {
        staraCenaEl.innerText = proizvod.staraCena;
    } else {
        staraCenaEl.style.display = 'none';
    }

    // Stanje izabranih opcija
    let izabranaBojaIndex = 0;
    let izabranaVelicina = null;

    // Funkcija za osvežavanje slika (glavna + galerija)
    function postaviSlike(bojaIndex) {
        const bojeSlike = proizvod.boje[bojaIndex].slike;
        const glavnaSlika = document.getElementById('proizvod-slika');
        const galerijaContainer = document.getElementById('proizvod-galerija');

        glavnaSlika.src = bojeSlike[0];
        galerijaContainer.innerHTML = '';

        bojeSlike.forEach((slikaSrc, index) => {
            const thumbDiv = document.createElement('div');
            thumbDiv.className = `gallery-thumb p-1 rounded-3 border ${index === 0 ? 'border-warning' : 'border-secondary'} bg-dark`;
            thumbDiv.style.cursor = 'pointer';
            thumbDiv.style.width = '80px';
            thumbDiv.style.height = '80px';

            const img = document.createElement('img');
            img.src = slikaSrc;
            img.className = 'img-fluid rounded-2 w-100 h-100 object-fit-cover';

            thumbDiv.addEventListener('click', () => {
                glavnaSlika.src = slikaSrc;
                document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.replace('border-warning', 'border-secondary'));
                thumbDiv.classList.replace('border-secondary', 'border-warning');
            });

            thumbDiv.appendChild(img);
            galerijaContainer.appendChild(thumbDiv);
        });
    }

    // Renderovanje boja
    const bojeContainer = document.getElementById('proizvod-boje');
    const nazivBojeSpan = document.getElementById('izabrana-boja-naziv');

    proizvod.boje.forEach((boja, index) => {
        const bojaKrug = document.createElement('div');
        bojaKrug.className = `color-circle ${index === 0 ? 'active' : ''}`;
        bojaKrug.style.backgroundColor = boja.hex;
        bojaKrug.title = boja.naziv;

        bojaKrug.addEventListener('click', () => {
            izabranaBojaIndex = index;
            nazivBojeSpan.innerText = boja.naziv;
            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
            bojaKrug.classList.add('active');
            postaviSlike(index);
        });

        bojeContainer.appendChild(bojaKrug);
    });

    // Postavi podrazumevanu boju na startu
    nazivBojeSpan.innerText = proizvod.boje[0].naziv;
    postaviSlike(0);

    // Renderovanje veličina
    const velicineContainer = document.getElementById('proizvod-velicine');
    proizvod.velicine.forEach((velicina, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-outline-light px-4 py-2';
        btn.innerText = velicina;

        // Podrazumevano selektuj prvu veličinu
        if (index === 0) {
            btn.classList.add('active', 'btn-warning');
            btn.classList.remove('btn-outline-light');
            izabranaVelicina = velicina;
        }

        btn.addEventListener('click', () => {
            document.querySelectorAll('#proizvod-velicine button').forEach(b => {
                b.classList.remove('active', 'btn-warning');
                b.classList.add('btn-outline-light');
            });
            btn.classList.remove('btn-outline-light');
            btn.classList.add('btn-warning', 'active');
            izabranaVelicina = velicina;
        });

        velicineContainer.appendChild(btn);
    });

    // Pamćenje podataka u korpu (localStorage)
    const dodajUKorpuBtn = document.getElementById('dodaj-u-korpu');
    dodajUKorpuBtn.addEventListener('click', () => {
        if (!izabranaVelicina) {
            alert("Molimo izaberite veličinu.");
            return;
        }

        const stavkaZaKorpu = {
            id: idProizvoda,
            naziv: proizvod.naziv,
            cena: proizvod.cena,
            boja: proizvod.boje[izabranaBojaIndex].naziv,
            velicina: izabranaVelicina,
            slika: proizvod.boje[izabranaBojaIndex].slike[0]
        };

        // Uzmi postojeću korpu ili napravi novu
        let korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
        korpa.push(stavkaZaKorpu);
        localStorage.setItem('prestigeKorpa', JSON.stringify(korpa));

        alert(`Uspešno dodato u korpu!\nModel: ${proizvod.naziv}\nBoja: ${stavkaZaKorpu.boja}\nVeličina: ${stavkaZaKorpu.velicina}`);
    });

} else {
    document.getElementById('proizvod-sadrzaj').innerHTML = `
        <div class="col-12 text-center py-5">
            <h2 class="text-white font-bebas">Proizvod nije pronađen.</h2>
            <a href="./katalog.html" class="btn btn-warning mt-3">Nazad na katalog</a>
        </div>
    `;
}


document.addEventListener("DOMContentLoaded", () => {
    const korpa = JSON.parse(localStorage.getItem('prestigeKorpa')) || [];
    const badge = document.getElementById('broj-u-korpi');
    
    if (badge && korpa.length > 0) {
        badge.innerText = korpa.length;
        badge.style.display = 'inline-block';
    }
});