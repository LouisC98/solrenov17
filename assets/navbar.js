const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const appContent = document.querySelector('.app-content');


burger.addEventListener('click', () => {
    console.log('click');
    menu.classList.toggle('hidden');
});

appContent.addEventListener('click', () => {

    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});