window.onload = function () {
    document.getElementById("colorSquare").style.display = "none";
    document.getElementById("colorError").style.display = "none";
    document.getElementById("mileageError").style.display = "none";
    document.getElementById("yearError").style.display = "none";
    document.getElementById("priceError").style.display = "none";
    document.getElementById("titleError").style.display = "none";
    document.getElementById("brandError").style.display = "none";
    document.getElementById("cancelButton").onclick = function () {
        document.getElementById("modalWindow").style.display = "none"
    };
};

var colorInputBox = document.getElementById("colorInput");

colorInputBox.addEventListener("blur", function () {
    let oldColor = document.getElementById("colorSquare").style.backgroundColor;
    document.getElementById("colorSquare").style.backgroundColor = colorInputBox.value;
    let newColor = document.getElementById("colorSquare").style.backgroundColor;
    if (oldColor === newColor && oldColor != colorInputBox.value) {
        document.getElementById("colorError").style.display = "block";
        document.getElementById("colorSquare").style.display = "none";
        document.getElementById("colorInput").style.borderColor = "#ff0000";
        document.getElementById("colorInput").style.borderStyle = "solid";
    }
    else {
        document.getElementById("colorError").style.display = "none";
        document.getElementById("colorSquare").style.display = "block";
        document.getElementById("colorInput").style.removeProperty('border');
    }
}, true);

function validateNumber(event) {

    let isNumber = true;
    let input = document.getElementById(event.target.getAttribute("id")).value;
    for (var index = 0; index < input.length; index++) {
        var char = input.charAt(index);
        var regex = /[0-9]|\./;
        if (!regex.test(char)) {
            isNumber = false;
            break;
        }
    }
    if (!isNumber) {
        event.target.parentElement.nextElementSibling.style.display = "block";
    }
    else {
        event.target.parentElement.nextElementSibling.style.display = "none";
    }
}

function yesNoCheck() {
    if (document.getElementById("yesCheck").checked) {
        document.getElementById("damageDetails").style.display = "block";
    }
    else {
        document.getElementById("damageDetails").style.display = "none";
    }
}

function submitForm() {
    emptyFieldCheck(document.getElementById("titleInput").value, document.getElementById("titleError").getAttribute("id"));
    emptyFieldCheck(document.getElementById("brandInput").value, document.getElementById("brandError").getAttribute("id"));
    //document.getElementById("carForm").submit();
}

function emptyFieldCheck(inputValue, errorId) {
    if (inputValue.trim().length === 0){
        document.getElementById(errorId).style.display = "block";
    }
    else
    {
        document.getElementById(errorId).style.display = "none";
    }
}