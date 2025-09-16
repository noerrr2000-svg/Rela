// التمرير إلى أسفل عند الضغط على السهم
function scrollToContent() {
    document.getElementById("content").scrollIntoView({
        behavior: 'smooth'
    });
}

// إضافة تأثيرات عند تحميل الصفحة
window.onload = function() {
    // إظهار المحتوى تدريجيا
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
        section.classList.add('visible');
    });

    // إضافة تأثير تدريجي للصور أو النصوص
    const images = document.querySelectorAll('.rela-image');
    images.forEach((image) => {
        image.classList.add('fade-in-image');
    });
}