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