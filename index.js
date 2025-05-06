// 1. 歡迎訊息
window.addEventListener("load", function () {
    alert("歡迎來到賴維正的部落格！");
  });
  
  // 2. 主題切換功能
  const btn = document.getElementById("toggle-theme");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // 3. 顯示今天日期
  const todaySpan = document.getElementById("today-date");
  const today = new Date();
  const formatted = `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;
  todaySpan.textContent = `今天是 ${formatted}`;
  