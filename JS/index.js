const newHeader = document.getElementById('scroll');
const scrollTriggerPosition = 150; // 設置滾動觸發新 header 的位置

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    newHeader.classList.toggle('scroll-menu', scrollPosition >= scrollTriggerPosition);
};

const handleMediaQueryChange = (mq) => {
    if (mq.matches) {
        window.removeEventListener('scroll', handleScroll);
    } else {
        window.addEventListener('scroll', handleScroll);
    }
};

const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addEventListener('change', (e) => handleMediaQueryChange(e.currentTarget));

handleMediaQueryChange(mediaQuery); // 將此行移至 change 監聽器外面