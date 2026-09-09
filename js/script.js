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