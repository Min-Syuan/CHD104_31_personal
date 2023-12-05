// const header = document.getElementById("scroll");
// const scrollDistance = 500;

// window.addEventListener("scroll", () => {
//     if (window.scrollY > scrollDistance) {
//         header.classList.add("scroll-menu");
//     } else {
//         header.classList.remove("scroll-menu");
//     }
//     }); 


const newHeader = document.getElementById('scroll');
const scrollTriggerPosition = 200; // 設置滾動觸發新 header 的位置

// 監聽網頁滾動事件
window.addEventListener('scroll', () => {
  // 取得目前的垂直滾動位置
  const scrollPosition = window.scrollY || window.pageYOffset;

  // 如果滾動位置大於或等於觸發位置，顯示新 header，否則顯示原始 header
  if (scrollPosition >= scrollTriggerPosition) {
    newHeader.classList.add('scroll-menu');
  } else {
    newHeader.classList.remove('scroll-menu');
  }
});