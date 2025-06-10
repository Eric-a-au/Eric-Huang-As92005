function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.removeAttribute('inert', '');
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click',closeMobileMenu);

media.addEventListener('change', function(e){
    setupTopNav(e);
})