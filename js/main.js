// Navbar scrolldown Background change 
window.addEventListener('scroll', function () {
  // Select the navbar element
  var navbar = document.querySelector('.navbar');
  
  // Check if the user has scrolled down
  if (window.scrollY > 0) {
      navbar.classList.add('scrolled'); // Add the 'scrolled' class to navbar
  } else {
      navbar.classList.remove('scrolled'); // Remove the 'scrolled' class from navbar
  }
});

// preloader js code

document.addEventListener("DOMContentLoaded", function() {
    showPreloader(); 
    setTimeout(hidePreloader, 1500); 
    document.body.style.overflow = "hidden";
});

function showPreloader() {
    var preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "flex";
    }
}

function hidePreloader() {
    var preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
        document.body.style.overflow = ""; 
    }
}
// navbar
$(document).ready(function() {
  // Toggle the about us submenu
  $('li:has(ul.htmlCss-sub-menu)').click(function(event) {
    event.stopPropagation();
    $(this).find('ul.htmlCss-sub-menu').slideToggle();
    $(this).siblings().find('ul.htmlCss-sub-menu').slideUp();
  });

  // Toggle the products submenu
  $('li:has(ul.more-sub-menu)').click(function(event) {
    event.stopPropagation();
    $(this).find('ul.more-sub-menu').slideToggle();
    $(this).siblings().find('ul.more-sub-menu').slideUp();
  });
});


// Toggle main menu (Hamburger Icon)
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-menu");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-menu", "bx-menu"); // Replace with close icon
  } else {
    searchBox.classList.replace("bx-x", "bx-menu"); // Replace with hamburger icon
  }
});

// Sidebar open/close
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0";
});

let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuCloseBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});

// Submenu toggles
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
let moreArrow = document.querySelector(".more-arrow");

htmlcssArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show1");
});

moreArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show2");
});


/// contact validation form js code
function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('phoneError').innerText = '';
  document.getElementById('messageError').innerText = '';

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (!name) {
      document.getElementById('nameError').innerText = 'Name is required';
      isValid = false;
  }

  // Email validation
  const email = document.getElementById('Email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
      document.getElementById('emailError').innerText = 'Email is required';
      isValid = false;
  } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerText = 'Invalid email format';
      isValid = false;
  }

  // Phone validation
  const phone = document.getElementById('number').value.trim();
  const phonePattern = /^\d{10}$/;
  if (!phone) {
      document.getElementById('phoneError').innerText = 'Phone number is required';
      isValid = false;
  } else if (!phonePattern.test(phone)) {
      document.getElementById('phoneError').innerText = 'Phone number must be 10 digits';
      isValid = false;
  }

  // Message validation
  const message = document.getElementById('Message').value.trim();
  if (!message) {
      document.getElementById('messageError').innerText = 'Message is required';
      isValid = false;
  }

  return isValid; // Return the validity of the form
}
///contact form end

///slider start
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 4000); // Change slide every 3 seconds

// Initialize slider
showSlide(currentIndex);

///slider end
// cookies
        var acceptButton = document.querySelector(".accept");

        // Add click event listener to the accept cookies button
        acceptButton.addEventListener("click", function() {
            // Hide the entire cookies div when the button is clicked
            document.querySelector(".cookies").style.display = "none";
        });
//cookies end

//FAQ start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
////FAQ end

//back-to-top start //
function scrollFunction() {
  var scrollTopButton = document.getElementById("scroll-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add scroll event listener to window
window.addEventListener('scroll', scrollFunction);

scrollFunction();
/////back to top end
  //popup form 

  function saveData() {
    // Retrieve input values
    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;

    // Here you can do whatever you want with the input values
    // For example, log them to the console
    console.log("Input 1:", input1Value);
    console.log("Input 2:", input2Value);

    // Close the modal
    $('#myModal').modal('hide');
  }
///
function submitForm() {

  var form = document.getElementById('myForm');


  if (form.checkValidity()) {
     
      var formData = new FormData(form);
      for (var pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
      }

      // Clear the form after submission
      form.reset();

      // Close the modal (if needed)
      $('#myModal').modal('hide');

  
  } else {
  
      alert('Please fill out all required fields.');
  }
}
/// search-box open close js code

