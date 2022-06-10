let sections  = document.querySelectorAll('section');

//variable targeting sections of window

//postions will be an empty array
let positions = [];


//variable positions will be set to an empty array
for (let i = 0; i < sections.length; i++) {
//Setting up a loop to be able to flow though each section    
  let position = sections[i].getBoundingClientRect().top + window.scrollY; //defining a variable to where each intstance within sections you will retrieve the information regarding the size of the element relative to the viewport.
  
  positions[i] = position; //
 
}

function setupNav() {
    //function for setting up the nav bar
  let navList = document.getElementById('navbar__list');
  
  //defining the navlist as a variable and reaching out to the DOM to retrieve the ID.

  for (let i = 0; i < sections.length; i++) {
      //Setting up a for loop to cycle through every section.
    let listItem = document.createElement('li');//add class here

    let section = sections[i];//This variable defines a section picked out of the array of Sections.
    let sectionId = section.getAttribute('id');//fetching the attribute id and defining it as variable sectionId.
    let sectionTitle = section.getAttribute('data-nav');//fetching the data nav attribute and defining it as sectionId.
    
    listItem.setAttribute('data-section', sectionId );//setting the attribute data-section (which does not cuurently exist) and passing the value of variable sectionId
    listItem.innerHTML = sectionTitle;//Taking the listItem variable we created earlier and updating the inner HTML to the sectionTitle variable/
    navList.appendChild(listItem);

    listItem.addEventListener('click', function(event){
        let newId = event.target.getAttribute('data-section');
        let nextSection = document.getElementById(newId);
        
        window.scroll({
            top: nextSection.offsetTop,
            behavior: "smooth"
            
        });
        
    
    })
   

  }
}
function removeActiveStateFromSections(){
   
    for(let i = 0; i < sections.length; i++){
        sections[i].classList.remove('active-section');
       
    }

}

window.addEventListener("scroll", function(){
    let currentPosition = window.pageYOffset;
    let sectionHeader = document.querySelectorAll('h2');
    
    for(let i = 0; i < positions.length; i++){
        if (currentPosition >= positions[i] && currentPosition <= positions[i + 1] ){
            
            removeActiveStateFromSections();

            sections[i].classList.add('active-section');
         
            
           document.getElementsByClassName('active-section').style.color = "yellow";
           
            
            
        }else if(currentPosition >= positions[i]){
            removeActiveStateFromSections();

            sections[i].classList.add('active-section');

           
           
            
        }
           
           
        

    }

})

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
 