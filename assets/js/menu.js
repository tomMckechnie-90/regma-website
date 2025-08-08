const menuOpenBtn = document.getElementById('menu-open-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuPanel = document.getElementById('menu-panel');

const openMenu = () => {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    menuPanel.classList.remove('translate-x-full');
};

const closeMenu = () => {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    menuPanel.classList.add('translate-x-full');
};

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMenu();
    }
})



