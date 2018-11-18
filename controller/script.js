window.onload = function () {
    document.getElementById('cancelButton').onclick = function () {
        document.getElementById('modalWindow').style.display = "none"
    };
};

function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        alert("baaaa");
    }
}

function yesNoCheck() {
    if (document.getElementById('yesCheck').checked) 
    {
        document.getElementById('damageDetails').style.display = 'block';
    }
    else
    {
        document.getElementById('damageDetails').style.display = 'none';
    }
}