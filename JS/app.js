let sections = document.querySelectorAll("section");
//variable targeting sections of window

let positions = [];

//variable positions will be set to an empty array
for (let i = 0; i < sections.length; i++) {
  //Setting up a loop to be able to flow though each section
  let position = sections[i].getBoundingClientRect().top + window.scrollY; //defining a variable to where each intstance within sections you will retrieve the information regarding the size of the element relative to the viewport.
  positions[i] = position; //
  
}

function setupNav() {
  //function for setting up the nav bar
  let navList = document.getElementById("navbar__list");

  for (let i = 0; i < sections.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList.add("menu__link")
    let section = sections[i];
    let sectionId = section.getAttribute("id");
    let sectionTitle = section.getAttribute("data-nav");

    listItem.setAttribute("data-section", sectionId);
    listItem.innerHTML = sectionTitle;
    navList.appendChild(listItem);

    listItem.addEventListener("click", function (event) {
      event.preventDefault();
      let newId = event.target.getAttribute("data-section");
      let nextSection = document.getElementById(newId);
    //   nextSection.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end",
    //     inline: "nearest",
    //   });

      window.scroll({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    });
  }
}
function removeActiveStateFromSections() {

  for (let i = 0; i < sections.length; i++) {
    
    sections[i].classList.remove("active-class");
  }
    
      
}

window.addEventListener("scroll", function () {
  let navLinks = document.querySelectorAll("nav li");
  let currentPosition = window.scrollY;
  
  for (let i = 0; i < positions.length; i++) {
    if (currentPosition >= positions[i]) {
      removeActiveStateFromSections();
      sections[i].classList.add("active-class");
      sections[i].style.color = "yellow";

      
      for (let x = 0; x < navLinks.length; x++) {
        console.log(navLinks[x]);
        if (navLinks[x].getAttribute("data-section") === sections[i].id) {
          // change the style for the nav item not section
          navLinks[i].style.color = "yellow";
        }else{
          
          navLinks[i].style.color = "black";

        }
      }
    }
  }
});

setupNav();

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
