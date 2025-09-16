// Show the Edit Profile Form
function showEditForm() {
    document.getElementById('edit-form').style.display = 'block';
}

// Save Changes and update the profile
function saveChanges() {
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    const department = document.getElementById('edit-department').value;
    const experience = document.getElementById('edit-experience').value;
    const skills = document.getElementById('edit-skills').value;
    const certifications = document.getElementById('edit-certifications').value;
    const projects = document.getElementById('edit-projects').value;
    const tasks = document.getElementById('edit-tasks').value;

    // Update the profile data on the page
    document.querySelector('.profile-name').textContent = name;
    document.querySelector('.profile-position').textContent = department;
    document.querySelector('.profile-info .info-item:nth-child(1) p').textContent = email;
    document.querySelector('.profile-info .info-item:nth-child(1) p').textContent = phone;

    // Hide the edit form
    document.getElementById('edit-form').style.display = 'none';
}

// Cancel edit
function cancelEdit() {
    document.getElementById('edit-form').style.display = 'none';
}

// Update profile picture
function updateProfilePicture(event) {
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    document.getElementById('profile-picture').src = imageUrl;
}

// Save Changes and update the profile with localStorage
function saveChanges() {
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    const department = document.getElementById('edit-department').value;

    // Update the profile data on the page
    document.querySelector('.profile-name').textContent = name;
    document.querySelector('.profile-info .info-item:nth-child(1) p:nth-child(2)').textContent = email;
    document.querySelector('.profile-info .info-item:nth-child(1) p:nth-child(3)').textContent = phone;
    document.querySelector('.profile-position').textContent = department;

    // Save the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('department', department);

    // Hide the edit form
    document.getElementById('edit-form').style.display = 'none';
}

// Load data from localStorage on page load
window.onload = function() {
    if (localStorage.getItem('name')) {
        document.querySelector('.profile-name').textContent = localStorage.getItem('name');
        document.querySelector('.profile-info .info-item:nth-child(1) p:nth-child(2)').textContent = localStorage.getItem('email');
        document.querySelector('.profile-info .info-item:nth-child(1) p:nth-child(3)').textContent = localStorage.getItem('phone');
        document.querySelector('.profile-position').textContent = localStorage.getItem('department');
    }
}