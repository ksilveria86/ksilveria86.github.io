document.addEventListener('DOMContentLoaded', function(e) {
    AOS.init({duration: 800});

    let footerYear = document.querySelector('footer span.year');
    if (footerYear) {
        let today = new Date();
        footerYear.innerText = today.getFullYear();
    }
    
    // Nav
    let mobileNav = document.querySelector('nav.mobile-nav .slideout');
    let navLinks = mobileNav.querySelectorAll('a');
    document.querySelector('nav.mobile-nav .hamburger').addEventListener('click', function(e) {
        mobileNav.classList.add('open');
    })
    mobileNav.querySelector('.close').addEventListener('click', function(e) {
        mobileNav.classList.remove('open');
    })
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            mobileNav.classList.remove('open');
        })
    })

    let gallery = document.querySelector('main .inner .images');
    if (gallery) {
        let main = gallery.querySelector('img.main');
        let thumbnails = gallery.querySelectorAll('.other-images img');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function(e) {
                let src = thumbnail.getAttribute('src');
                main.setAttribute('src', src);
            })
        })
    }
})