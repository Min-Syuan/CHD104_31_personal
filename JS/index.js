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


// function $id(id) {
//     return document.getElementById(id);
// }

// window.addEventListener('load', function(){
//     let hotSaleItems = this.document.querySelector('.hot-sale-items')
//     let curIndex = 0;
//     function
// })

$(function () {
    let divWidth;
    let imgCount;
    let index = 0;
    let timer;

    function sliderActive(width, count) {
        divWidth = width;
        imgCount = count;

        for (let i = 0; i < imgCount; i++) {
            $('#contentButton').append(`<li></li>`);
        }
        $('#contentButton li:first').addClass('clicked');

        // $('#content li').width(divWidth); // li寬
        // $('#content').width(divWidth * imgCount); // ul寬

        timer = setInterval(moveToNext, 3000);

        $('#contentButton li').click(function () {
            clearInterval(timer);

            index = $(this).index();

            $(this).addClass('clicked');
            $('#contentButton li').not(this).removeClass('clicked');

            timer = setInterval(moveToNext, 3000);
        });
    }

    function moveToNext() {
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }

        $('#content').animate({
            left: divWidth * index * -1
        });
        $(`#contentButton li:eq(${index})`).addClass('clicked');
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked');
    }

    if ($(window).width() <= 768) {
        divWidth = $('#sliderBoard').width()+10;
        imgCount = $('#content li').length;
        sliderActive(divWidth, imgCount);
    }
});