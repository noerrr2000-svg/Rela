document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // يمنع تحديث الصفحة

  // أي بيانات يدخلها المستخدم تعتبر صحيحة
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username && email && password) {
    // يفتح الصفحة الرئيسية
    window.location.href = "index.html";
  } else {
    alert("Please fill in all fields.");
  }
});