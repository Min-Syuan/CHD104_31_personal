function showLarge (e) {
    const small = e.target;
    document.getElementById('large').src = small.src;
}

function init () {
    const smalls = document.getElementsByClassName('small')
    for(let i=0; i<smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}
window.addEventListener('load', init, false);