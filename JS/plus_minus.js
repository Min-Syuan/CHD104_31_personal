function $id(id) {
    return document.getElementById(id);
}

window.addEventListener("load", function(){
    $id('qtyMinus').onclick = function(e) {
        let qtyObj = e.target.nextElementSibling;
        let qty = parseInt(qtyObj.value);
        if(qty>0) {
            qtyObj.value = qty - 1;
        }
    }
    $id('qtyPlus').onclick = function(e){
        let qtyObj = e.target.previousElementSibling;
        let qty = parseInt(qtyObj.value);
        qtyObj.value = qty + 1;
    }

})




