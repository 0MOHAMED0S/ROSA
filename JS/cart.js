function incrementQuantity(button) {
    var inputElement = button.parentNode.querySelector('.quantity-input');
    inputElement.value = parseInt(inputElement.value) + 1;
}

function decrementQuantity(button) {
    var inputElement = button.parentNode.querySelector('.quantity-input');
    if (parseInt(inputElement.value) > 0) {
        inputElement.value = parseInt(inputElement.value) - 1;
    }
}