const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show1');
    } else {
        entry.target.classList.remove('show1');
    }
});
});
        
const hiddenElements = document.querySelectorAll('.Clock');
hiddenElements.forEach((el) => observer.observe(el));
        document.addEventListener("DOMContentLoaded", (event) => {
         gsap.registerPlugin(ScrollTrigger)
    });

     gsap.to('.BigHand', {
        rotation: 500,
        duration: 20,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.SmallHand', {
        rotation: 5134,
        duration: 15,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.TopCog', {
        rotation: 5195,
        duration: 50,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.Handle', {
        rotation: 5195,
        duration: 50,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.BackLeftCog', {
        rotation: 5195,
        duration: 50,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.TopRightCog', {
        rotation: 5195,
        duration: 50,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.BackCog', {
        rotation: 5195,
        duration: 50,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })

    gsap.to('.LeftCog', {
        rotation: 5195,
        duration: 50,
        scrollTrigger: {
            trigger: '.FirstPage',
            scrub: true,
    }
    })