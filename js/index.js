const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/////////////////// NAVIGATION //////////////////////////
const navLinks = document.querySelectorAll('nav > a');

const link1 = navLinks[0];
const link2 = navLinks[1];
const link3 = navLinks[2];
const link4 = navLinks[3];
const link5 = navLinks[4];
const link6 = navLinks[5];

link1.textContent = siteContent['nav']['nav-item-1'];
link2.textContent = siteContent['nav']['nav-item-2'];
link3.textContent = siteContent['nav']['nav-item-3'];
link4.textContent = siteContent['nav']['nav-item-4'];
link5.textContent = siteContent['nav']['nav-item-5'];
link6.textContent = siteContent['nav']['nav-item-6'];

/////////////////// CREATED NAV ELEMENTS //////////////////////////
const navbar = document.querySelector('nav');

const navStart = document.createElement('a');
navStart.textContent = 'Home';

const navEnd = document.createElement('a');
navEnd.textContent = 'Social';

navbar.prepend(navStart);
navbar.appendChild(navEnd);

/////////////////// CHANGING NAV TEXT COLOR TO GREEN //////////////////////////
const newNavLinks = document.querySelectorAll('nav > a');


newNavLinks.forEach(link => {
  link.style.color = 'green';
});

/////////////////// CTA //////////////////////////
const ctaTitle = document.querySelector('.cta-text > h1');
ctaTitle.textContent = siteContent['cta']['h1'];

const headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent['cta']['button'];


/////////////////// TOP CONTENT //////////////////////////
const topContentH4 = document.querySelectorAll('.top-content > .text-content > h4');
const topContentP = document.querySelectorAll('.top-content > .text-content > p');

topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentP[0].textContent = siteContent['main-content']['features-content'];


topContentH4[1].textContent = siteContent['main-content']['about-h4'];
topContentP[1].textContent = siteContent['main-content']['about-content'];


/////////////////// MIDDLE IMAGE //////////////////////////
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


/////////////////// BOTTOM CONTENT //////////////////////////
const bottomContentH4 = document.querySelectorAll('.bottom-content > .text-content > h4');
const bottomContentP = document.querySelectorAll('.bottom-content > .text-content > p');

bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentP[0].textContent = siteContent['main-content']['services-content'];

bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];

bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];


/////////////////// CONTACT //////////////////////////
const contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact > p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];


/////////////////// FOOTER //////////////////////////
const footerP = document.querySelector('footer > p');
footerP.textContent = siteContent['footer']['copyright'];

//************************************************************************************************

////////////////////////STRETCH////////////////////////////
const body = document.querySelector('body');
const ctaText = document.querySelector('.cta > .cta-text');

const changeStyles = document.createElement('button');
changeStyles.textContent = 'Change Styles!';
changeStyles.style.height = '75px';
changeStyles.style.borderRadius = '5px';

ctaText.appendChild(changeStyles);


changeStyles.addEventListener('click', change);

function change() {
  body.style.background = 'black';

  ctaTitle.style.color = 'red';

  headerImg.src = 'https://cdn-images-1.medium.com/max/2600/1*pofor4p-ig072eaChITOYQ.jpeg';
  headerImg.style.width = 'auto';
  headerImg.style.height = '350px';

  newNavLinks.forEach(link => {
    link.style.color = 'red';
  });
}








