function $id(id) {
    return document.getElementById(id);
}

window.addEventListener("load", function(){
    let unitPrice = $id('unitPrice').innerText.replace(',', '');
    
    $id('qtyMinus').onclick = function(e) {
        let qty = parseInt(quantity.value);
        if(qty>0) {
            quantity.value = qty -1;
            updateTotal (parseInt(quantity.value), unitPrice);
        }
    }
    $id('qtyPlus').onclick = function(e){
        let qty = parseInt(quantity.value);
        quantity.value = qty + 1;
        updateTotal (parseInt(quantity.value), unitPrice);
    }
    
    function updateTotal (qty, unitPrice) {
        let totalPrice = qty * unitPrice;
        $id('totalPrice').innerText = totalPrice.toLocaleString();
    }

})
