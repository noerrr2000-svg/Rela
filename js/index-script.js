// عند تحميل الصفحة، تحقق مما إذا كانت هناك حاجة لتشغيل الفيديو
window.addEventListener("scroll", function () {
  let video = document.querySelector("video");
  let videoSection = document.querySelector(".hero-section");

  if (video && videoSection) {
    let videoSectionTop = videoSection.offsetTop;
    let videoSectionHeight = videoSection.offsetHeight;
    let scrollPosition = window.scrollY + window.innerHeight;

    // إذا كانت قد ظهرت منطقة الفيديو في الشاشة، ابدأ تشغيله
    if (scrollPosition > videoSectionTop && scrollPosition < videoSectionTop + videoSectionHeight) {
      video.play();
    } else {
      video.pause();
    }
  }
});

// تأثير التمرير فوق الأزرار
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("mouseenter", function () {
  ctaButton.style.backgroundColor = "#023e8a";
  ctaButton.style.color = "white";
});

ctaButton.addEventListener("mouseleave", function () {
  ctaButton.style.backgroundColor = "white";
  ctaButton.style.color = "#38bdf8";
});

// تغيير حالة النقر على زر التسجيل
ctaButton.addEventListener("click", function () {
  ctaButton.innerText = "تم التسجيل!";
  ctaButton.style.backgroundColor = "#4caf50";  // تغيير اللون بعد النقر
  setTimeout(() => {
    ctaButton.innerText = "سجل الآن";  // إعادة النص بعد فترة قصيرة
    ctaButton.style.backgroundColor = "#38bdf8";
  }, 2000);
});