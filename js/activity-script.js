

function openRegister(e, btn) {
  e.stopPropagation();
  const card = btn.closest('.card');
  const title = card.dataset.title || '';
  const place = card.dataset.place || '';
  const day = card.dataset.day || '';
  const time = card.dataset.time || '';

  document.getElementById('modalTitle').innerText = 'Register: ' + title;
  document.getElementById('actTitle').value = title;
  document.getElementById('actPlace').value = place;
  document.getElementById('actWhen').value = day + ' — ' + time;

  document.getElementById('modalBackdrop').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalBackdrop').style.display = 'none';
}

function submitRegistration() {
  const name = document.getElementById('userName').value.trim();
  const phone = document.getElementById('userPhone').value.trim();

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }

  const payload = {
    activity: document.getElementById('actTitle').value,
    place: document.getElementById('actPlace').value,
    when: document.getElementById('actWhen').value,
    name, phone
  };
  console.log('New Registration:', payload);

  alert('Your registration has been submitted. Thank you, ' + name + '!');
  document.getElementById('userName').value = '';
  document.getElementById('userPhone').value = '';
  closeModal();
}

document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('click', function(ev) {
    if (ev.target.closest('.register-btn')) return;
    const btn = this.querySelector('.register-btn');
    if (btn) openRegister(ev, btn);
  });
});