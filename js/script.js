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
    


    /*Skripta za recenzije*/

        (() => {
        const form = document.getElementById('review-form');
        const track = document.getElementById('reviews-track');
        const viewport = document.getElementById('reviews-grid');
        const pageLabel = document.getElementById('reviews-page');
        if (!form || !track) return;
        let page = 0;
        const cardsPerPage = () => window.matchMedia('(max-width: 767.98px)').matches ? 1 : 3;
        const pageCount = () => Math.max(1, Math.ceil(track.children.length / cardsPerPage()));
        const updateCarousel = () => {
            const pages = pageCount();
            page = Math.max(0, Math.min(page, pages - 1));
            track.style.transform = `translateX(-${page * viewport.clientWidth}px)`;
            pageLabel.textContent = `${page + 1} / ${pages}`;
            document.getElementById('reviews-prev').disabled = page === 0;
            document.getElementById('reviews-next').disabled = page >= pages - 1;
        };
        document.getElementById('reviews-prev').addEventListener('click', () => { page--; updateCarousel(); });
        document.getElementById('reviews-next').addEventListener('click', () => { page++; updateCarousel(); });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
        const ratingButtons = [...document.querySelectorAll('.review-rating button')];
        let rating = 0;
        document.getElementById('review-open').addEventListener('click', () => {
            form.hidden = !form.hidden;
            if (!form.hidden) document.getElementById('review-name').focus();
        });
        ratingButtons.forEach(button => button.addEventListener('click', () => {
            rating = Number(button.dataset.rating);
            ratingButtons.forEach((star, index) => {
                star.classList.toggle('selected', index < rating);
                star.setAttribute('aria-checked', String(index + 1 === rating));
            });
        }));
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!rating) { ratingButtons[0].focus(); return; }
            const name = document.getElementById('review-name').value.trim();
            const text = document.getElementById('review-text').value.trim();
            const card = document.createElement('article');
            card.className = 'review-card is-featured';
            const stars = document.createElement('div');
            stars.className = 'review-stars';
            stars.setAttribute('aria-label', `${rating} od 5 zvezdica`);
            stars.textContent = '★★★★★'.slice(0, rating);
            const quote = document.createElement('p');
            quote.className = 'review-quote';
            quote.textContent = `„${text}“`;
            const source = document.createElement('div');
            source.className = 'review-source';
            const avatar = document.createElement('span');
            avatar.className = 'review-avatar';
            avatar.textContent = name.charAt(0).toUpperCase();
            const details = document.createElement('span');
            const customer = document.createElement('strong');
            customer.textContent = name;
            const caption = document.createElement('small');
            caption.textContent = 'Kupac';
            details.append(customer, caption);
            source.append(avatar, details);
            card.append(stars, quote, source);
            track.append(card);
            updateCarousel();
            if (track.children.length > cardsPerPage()) { page = pageCount() - 1; updateCarousel(); }
            form.reset();
            rating = 0;
            ratingButtons.forEach(star => { star.classList.remove('selected'); star.setAttribute('aria-checked', 'false'); });
            form.hidden = true;
        });
    })();


 /* Skripta za baner o kolačićima */
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




