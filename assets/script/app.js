window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const classes = ['bg-white/75', 'border-b', 'border-grayBorder', 'backdrop-blur-xl'];

    classes.forEach((cls) => {
        header.classList.toggle(cls, window.scrollY > 50);
    });
});

document.querySelector('#hamburger-menu').addEventListener('click', () => {
    document.body.classList.add('no-scroll');

    tl.clear()
        .set('#menu-full', {
            display: 'block',
        })
        .set('#hamburger-menu', {
            display: 'none',
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
    document.body.classList.remove('no-scroll');
    tl.clear()
        .to('#menu-full', {
            duration: 0,
            onComplete: function () {
                document.querySelector('#menu-full').style.display = 'none';
            },
            ease: 'Expo.easeInOut',
        })
        .set('#hamburger-menu', {
            display: 'flex',
        });
});