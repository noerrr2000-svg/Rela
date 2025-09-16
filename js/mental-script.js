// ========================================
// 1️⃣ Hover effect على البطاقات
// ========================================
const cards = document.querySelectorAll('.tip-card, .exercise-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
  });
});

// ========================================
// 2️⃣ ظهور الأقسام عند التمرير (Scroll Animation) لكل قسم على حدة
// ========================================
const sections = document.querySelectorAll('section');

function revealSections() {
  const scrollY = window.scrollY + window.innerHeight * 0.85;
  sections.forEach(section => {
    if(scrollY > section.offsetTop) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
}

// تشغيل المرة الأولى عند تحميل الصفحة
revealSections();

// تشغيل عند التمرير
window.addEventListener('scroll', revealSections);

// ========================================
// 3️⃣ زر العودة للأعلى (Back to Top Button)
// ========================================
const backBtn = document.getElementById('backBtn');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }
});

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// 4️⃣ تغيير لون Navbar عند التمرير
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.style.backgroundColor = '#e0f0ff';
  } else {
    navbar.style.backgroundColor = '#fff';
  }
});