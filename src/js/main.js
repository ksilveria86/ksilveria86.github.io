document.addEventListener('DOMContentLoaded', function(e) {
    let footerYear = document.querySelector('footer span.year');
    if (footerYear) {
        let today = new Date();
        footerYear.innerText = today.getFullYear();
    }
})