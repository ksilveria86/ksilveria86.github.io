document.addEventListener('DOMContentLoaded', function(e) {
    AOS.init({duration: 800});

    let footerYear = document.querySelector('footer span.year');
    if (footerYear) {
        let today = new Date();
        footerYear.innerText = today.getFullYear();
    }
    
    // Nav
    let mobileNav = document.querySelector('nav.mobile-nav .slideout');
    document.querySelector('nav.mobile-nav .hamburger').addEventListener('click', function(e) {
        mobileNav.classList.add('open');
    })
    mobileNav.querySelector('.close').addEventListener('click', function(e) {
        mobileNav.classList.remove('open');
    })
})