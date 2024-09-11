// ================SHOW MENU================
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

// ================MENU SHOW================
/* Validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

// ================MENU HIDDEN================
/* Validate if constant exists*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// ================REMOVE MENU MOBILE================
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav__link,we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// ================ADD BLUR TO HEADER================
const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height,add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader);

// ================EMAIL JS================
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID  -  #form - public key
    emailjs.sendForm('service_69u85wl', 'template_tvymfab', '#contact-form', 'RJeqvnNPD-Mq3E8aQ')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully';

            //remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)

            //clear input fields
            contactForm.reset();

        }, () => {
            //show error message
            contactMessage.textContent = 'Message not sent(service error)';
        })
}

contactForm.addEventListener("submit", sendEmail)

// ================Show Scroll Up ===============
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup.
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// ================SCROLL SECTIONS ACTIVE LINK================
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

//smooth scroll


    document.getElementById("scroll-up").addEventListener("click",(e)=>{
        e.preventDefault();
        scrollToTop();
    })
    
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };


/*==================EMAIL JS==================*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true // Animations repeat
})

sr.reveal(`.home__data,.home__social,.contact__container`)
sr.reveal(`.home__image,.footer__container`,{origin:'bottom'})
sr.reveal(`.about__data,.skills__data`, {origin:'left'})
sr.reveal(`.about__image, .skills__content`,{origin:'right'})
sr.reveal(`.services__card,.projects__card`,{interval:100})

// ================TYPED JS================
var typed = new Typed('#typing', {
    strings: ['Front End Developer', 'React JS Developer', 'UI Developer'],
    typeSpeed: 50,
    backSpeed:60,
    loop:true
  });
