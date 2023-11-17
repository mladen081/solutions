function myFunction() {
  // Close all dropdowns
  document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
    dropdown.style.display = 'none';
    dropdown.previousElementSibling.querySelector('.fa').classList.remove('fa-caret-up');
    dropdown.previousElementSibling.querySelector('.fa').classList.add('fa-caret-down');
  });

  // Toggle the responsive class
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
function toggleDropdown(button) {
  var dropdownContent = button.nextElementSibling;
  var icon = button.querySelector('.fa');
  
  // Close all dropdowns except the clicked one
  document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
    if (dropdown !== dropdownContent && dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
      dropdown.previousElementSibling.querySelector('.fa').classList.remove('fa-caret-up');
      dropdown.previousElementSibling.querySelector('.fa').classList.add('fa-caret-down');
    }
  });
  
  // Toggle the clicked dropdown
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  
  // Toggle the icon class
  icon.classList.toggle('fa-caret-up', dropdownContent.style.display === 'block');
  icon.classList.toggle('fa-caret-down', dropdownContent.style.display !== 'block');
}



// Check the screen width on page load and hide dropdowns if necessary
function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 767) {
    // Hide all dropdowns
    document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
      dropdown.style.display = 'none';
    });
  }
}

// Attach the checkScreenWidth function to the window resize event
window.addEventListener('resize', checkScreenWidth);

// Call checkScreenWidth on page load
checkScreenWidth();