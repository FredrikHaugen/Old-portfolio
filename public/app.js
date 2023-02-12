
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];

function pageTransitions() {
            // Add click event listener to each button
            sectBtn.forEach(btn => {
            btn.addEventListener('click', function() {
            // Remove active-btn class from current active button
            document.querySelector('.active-btn').classList.remove('active-btn');
            // Add active-btn class to clicked button
            this.classList.add('active-btn');
            });
            });

            // Add click event listener to all sections
            allSections.addEventListener('click', e => {
            const id = e.target.dataset.id;
            if (id) {
            // Remove active class from all buttons and add to clicked button
            sectBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Hide all sections and show clicked section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            }
        })

        //Toggle theme
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click', function() {
          let element = document.body;
          element.classList.toggle('light-mode')
        })
    }

pageTransitions();

function closeLightbox() {
  // Remove lightbox element
  let lightbox = document.querySelector(".lightbox");
  lightbox.parentNode.removeChild(lightbox);

  // Remove dimmer element
  let dimmer = document.querySelector(".dimmer");
  dimmer.parentNode.removeChild(dimmer);

  // Reset body filter
  document.body.style.filter = "none";
}

function openLightbox(lightboxItem) {
  // Create lightbox element
  let lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");


  // Create lightbox content element
  let h1 = document.createElement("h1");
  h1.classList.add("lightbox-title");
  h1.innerText = lightboxItem.title;
  lightbox.appendChild(h1);


  lightboxItem.sections.forEach(section => {

  section.images.forEach(image => {
    let img = document.createElement("img");
    img.classList.add("lightbox-image");
    img.src = image;
    lightbox.appendChild(img);
    })
  

  section.texts.forEach(text => {
    let p = document.createElement("p");
    p.classList.add("lightbox-text");
    p.innerText = text;
    lightbox.appendChild(p);
    })
    
  })

  let icondiv = document.createElement("div");
  icondiv.classList.add("diva");
  lightbox.appendChild(icondiv);


  lightboxItem.icons.forEach(icon => {
    let i = document.createElement("i")
    icon.classes.forEach(c => {
    i.classList.add(c);
    })
    lightbox.appendChild(i);
    icondiv.appendChild(i);
  })


  // Add lightbox to DOM
  document.body.appendChild(lightbox);

  // Create dimmer element
  let dimmer = document.createElement("div");
  dimmer.classList.add("dimmer");

  // Add dimmer to DOM
  document.body.appendChild(dimmer);

  // Close lightbox when clicked
  dimmer.addEventListener("click", closeLightbox);
}


function lazyLoadImages() {
    // Select all the images on the page
    const images = document.querySelectorAll('img');
  
    // Set up the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      // For each image that becomes intersecting (visible in the viewport)
      entries.forEach((entry) => {
        // If the image is intersecting
        if (entry.isIntersecting) {
          // Load the image
          const img = entry.target;
          const src = img.getAttribute('src');
          img.setAttribute('src', src);
          // Stop observing the image
          observer.unobserve(img);
        }
      });
    });
  
    // Observe each image
    images.forEach((img) => {
      observer.observe(img);
    });
  }

window.addEventListener('load', lazyLoadImages);

