
// const btns = document.getElementsByClassName('btnPlus');
// function showAnswer () {
//     btns[i].onclick
// }

const qas = document.querySelectorAll('.qa');

qas.forEach(qa => {
    const button = qa.querySelector('.btnPlus');
    const answer = qa.querySelector('.a');
    button.addEventListener('click', function() {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                button.innerText ='+';
            } else {
                answer.style.display = 'block';
                button.innerText ='-';
            }
    });
});