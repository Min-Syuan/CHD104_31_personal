const newHeader = document.getElementById('scroll');
const scrollTriggerPosition = 150; // 設置滾動觸發新 header 的位置

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= scrollTriggerPosition) {
        newHeader.style.display = 'block'; // 显示 newHeader
        newHeader.style.display = 'flex'
        newHeader.classList.add('scroll-menu');
    } else {
        newHeader.style.display = 'none'; // 隐藏 newHeader
        newHeader.classList.remove('scroll-menu');
    }
};

const handleMediaQueryChange = (mq) => {
    if (mq.matches) {
        newHeader.style.display = 'none'; // 当满足媒体查询时隐藏 newHeader
        window.removeEventListener('scroll', handleScroll);
    } else {
        window.addEventListener('scroll', handleScroll);
    }
};

const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addEventListener('change', (e) => handleMediaQueryChange(e.currentTarget));

handleMediaQueryChange(mediaQuery);


$(function(){
    $('#ham-btn').click(function(){
        $('#ham-nav').slideToggle(500);
    })
})
