window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const classes = ['bg-white/75', 'border-b', 'border-grayBorder', 'backdrop-blur-xl'];

    classes.forEach((cls) => {
        header.classList.toggle(cls, window.scrollY > 50);
    });
});

const tl = gsap.timeline();

document.querySelector('#hamburgerMenu').addEventListener('click', () => {
    tl
        .to('#menuFull', {
            delay: 0,
            duration: 0,
            display: 'block',
            ease: 'Expo.easeOut',
        })
        .to('#hamburgerMenu', {
            delay: 0,
            duration: 0,
            display: 'none',
            ease: 'Expo.easeInOut',
        })
        .from('#menu-bg span', {
            duration: .8,
            x: '100%',
            stagger: 0.1,
            ease: 'Expo.easeInOut',
        })
        .from('#listMenu li', {
            duration: 1,
            y: '100%',
            opacity: 0,
            stagger: 0.2,
            ease: 'easeOut',
        });
});

document.querySelector('#close-menu').addEventListener('click', () => {
    tl.to('#menuFull', {
        duration: .2,
        display: 'none',
    })
        .to('#hamburgerMenu', {
            duration: 0,
            display: 'flex',
        })
});