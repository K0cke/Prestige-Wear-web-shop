window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('skrolovan');
    } else {
        header.classList.remove('skrolovan');
    }
});
    
    
    
    const scriptURL = 'UBACI_DRUGAROV_LINK_OVDE'; 
    const form = document.getElementById('google-sheet-forma');
    const btn = document.getElementById('submit-btn');

    if(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            btn.innerHTML = "Slanje...";
            
            if(scriptURL === 'UBACI_DRUGAROV_LINK_OVDE') {
                setTimeout(() => {
                    alert("Test uspešan: Forma radi! (Podaci će ići u Excel kad ubacite link)");
                    form.reset();
                    btn.innerHTML = "Pošalji";
                }, 1000);
                return;
            }

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert("Poruka je uspešno poslata!");
                    form.reset();
                    btn.innerHTML = "Pošalji";
                })
                .catch(error => {
                    alert("Došlo je do greške. Pokušajte ponovo.");
                    btn.innerHTML = "Pošalji";
                });
        });
    }
