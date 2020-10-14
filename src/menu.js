const hamburgerButton = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('nav');
const menuItems = [ ...document.querySelectorAll('nav .menu-list .menu-item')];

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('visible');
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        if(navigation.classList.contains('visible')) navigation.classList.remove('visible');
    });
})