const tl = gsap.timeline();

const FadeIn = (elementSelector, direction = "up") => {
    const y = direction === "up" ? 40 : -60;
    const element = document.querySelector(elementSelector);

    const tl = gsap.timeline({
        paused: true
    });

    tl.from(element, {
        y: y,
        opacity: 0,
        ease: 'Expo.easeInOut',
    });

    return tl;
};

const headerAnimation = FadeIn("#header", "down");
headerAnimation.play();


const bannerText = new SplitType('#bannerText')
gsap.to('#bannerText .char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1,
})