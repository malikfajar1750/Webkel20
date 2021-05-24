const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 650,
    transition: 600,
    interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbz2HNGYviUjs3Anci2tZ1qt_vCRMKWXHggSmIz71a1Rij1iRmnX_cxWfpvjJ3HKtDbhog/exec'
const form = document.forms['mentoring-contact-us'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })

        .then(response => {
            M.toast({
                html: 'Terima kasih! Pesan sudah dikirim'
            })
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})