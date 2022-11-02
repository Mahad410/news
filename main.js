const ham = document.getElementById('hamburger');
const close_btn = document.getElementById('close');
const nav = document.getElementById('side_nav');
const opacity = document.getElementById('opacity');
const open = () => {
    close_btn.style.display = 'block';
    nav.style.transform = 'translateX(0)';
    opacity.style.opacity = '1';
    opacity.style.pointerEvents = 'all';
}

const close = () => {
    close_btn.style.display = 'none';
    nav.style.transform = 'translateX(100%)';
    opacity.style.opacity = '0';
    opacity.style.pointerEvents = 'none';
}
ham.addEventListener('click', open)
close_btn.addEventListener('click', close)
opacity.addEventListener('click', close)