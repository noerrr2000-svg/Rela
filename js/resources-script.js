function toggleDetails(id) {
  var resourceItem = document.getElementById(id).parentElement; // Get the parent div of the clicked item
  resourceItem.classList.toggle('active'); // Toggle the 'active' class to show/hide details
}