gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none none reverse"
})

gsap.from('#header', {
    y: -60,
    opacity: 0,
    ease: 'Expo.easeInOut',
    scrollTrigger: "#header"
})

// ScrollTrigger.create({
//     animation: tl,
//     trigger: '.wrapper',
//     start: "top top",
//     end: "+=600",
//     scrub: 1,
//     pin: true,
//     ease: "ease"
// })

// tl.to('.wrapper', { x: -window.innerWidth * 5 })

// ==  start banner ==
const bannerText = new SplitType('#bannerText')
gsap.to('#bannerText .char', {
    scrollTrigger: {
        trigger: "#bannerText .char",
        // markers: true,
    },
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1,
})


gsap.to('.banner', {
    scale: .8,
    ease: "ease",
    scrollTrigger: {
        trigger: '.banner',
        scrub: 1,
        start: "top top",
        end: "bottom 80%",
        pin: true,
        // markers: true,
    }
})

gsap.to('.btn-banner', {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: 'ease',
});
// ==  end banner ==

// ==  start about ==
const about = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top 100%',
        end: 'bottom 100%',

    }
});

about.from('.about .heading', {
    y: 100,
    skewY: 7,
    duration: .5
}).from('.about .paragraph', {
    letterSpacing: -10,
    y: 60,
    opacity: 0,
    duration: .5
}).from('.about img', {
    y: 150,
    opacity: 0,
    duration: .6
})
// ==  end about ==

// == start example ==

const mediaQuery = window.matchMedia('(min-width: 1024px)');

if (mediaQuery.matches) {

    gsap.from('.example .heading', {
        y: 100,
        duration: .5,
        scrollTrigger: {
            trigger: '.example',
            scrub: 1,
            start: "top top",
            end: "bottom 80%",
            pin: true,
            // markers: true,
        }
    })
    gsap.from('.card-example:nth-child(1)', {
        x: '100%',
        rotationX: '0',
        rotationY: '0',
        rotationZ: '20deg',
        duration: .5,
        ease: "ease",
        scrollTrigger: {
            trigger: '.example',
            scrub: 1,
            start: "top top",
            end: "bottom 80%",
            pin: true,
            // markers: true,
        }
    })
    gsap.from('.card-example:nth-child(3)', {
        x: '-100%',
        rotationX: '0',
        rotationY: '0',
        rotationZ: '-20deg',
        duration: .5,
        ease: "ease",
        scrollTrigger: {
            trigger: '.example',
            scrub: 1,
            start: "top top",
            end: "bottom 80%",
            pin: true,
            // markers: true,
        }
    })
}


// == end example ==

// == start testimonial ==
const testimonial = gsap.timeline({
    scrollTrigger: {
        trigger: '.testimonial',
        scrub: 1,
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
    }
});

testimonial.from('.testimonial .heading', {
    scale: 1.8,
    opacity: 0,
    duration: .6
}).from('.testimonial .paragraph', {
    y: 100,
    opacity: 0,
    duration: .6
})
// == end testimonial ==

// == end writer ==
const writer = gsap.timeline({
    scrollTrigger: {
        trigger: '.writer',
        scrub: 1,
        start: "top 50%",
        end: "bottom 100%",
        // markers: true,
    }
});
writer.from('.writer .heading', {
    y: 100,
    opacity: 0,
    duration: 1
}).from('.writer .sub-heading', {
    y: -20,
    opacity: 0,
    duration: .6
}).from('.writer .paragraph', {
    y: 100,
    opacity: 0,
    duration: .6
})
// == end writer ==

// ==  start device ==
const device = gsap.timeline({
    scrollTrigger: {
        trigger: '.device',
        start: 'top 50%',
        end: 'bottom 100%',
        // markers: true,
    }
});

device.from('.device .heading', {
    y: -20,
    opacity: 0,
    duration: .5
}).from('.device .paragraph', {
    letterSpacing: -10,
    y: 60,
    opacity: 0,
    duration: .5
}).from('.device img', {
    y: 150,
    opacity: 0,
    duration: .6
})
// ==  end device ==