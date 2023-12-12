const newHeader = document.getElementById('scroll');
const scrollTriggerPosition = 150;

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= scrollTriggerPosition) {
        newHeader.style.display = 'block';
        newHeader.style.display = 'flex'
        newHeader.classList.add('scroll-menu');
    } else {
        newHeader.style.display = 'none';
        newHeader.classList.remove('scroll-menu');
    }
};

const handleMediaQueryChange = (mq) => {
    if (mq.matches) {
        newHeader.style.display = 'none';
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
