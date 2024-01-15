var registerForm = document.querySelector(".registerForm");

registerForm.onsubmit = function (e) {
    e.preventDefault();
    var value = e.target[0].value;
    var currencyfrom = e.target[1].value;
    var currencyto = e.target[2].value;
    var result;
    console.log(e);
    if (currencyfrom == 'nis') {
        if (currencyto == 'dollar' && value >= 0) {
            result = value * 0.27;
        }
        else if (currencyto == 'dinar' && value >= 0) {
            result = value * 0.19;
        }
        else if (currencyto == 'nis' && value >= 0) {
            result = value;
        }
        else {
            result = 'not valid';
        }
    }
    else if (currencyfrom == 'dollar') {
        if (currencyto == 'dollar' && value >= 0) {
            result = value;
        }
        else if (currencyto == 'dinar' && value >= 0) {
            result = value * 0.71;
        }
        else if (currencyto == 'nis' && value >= 0) {
            result = value*3.75;
        }
        else {
            result = 'not valid';
        }
    }
    else if (currencyfrom == 'dinar') {
        if (currencyto == 'dollar' && value >= 0) {
            result = value*1.41;
        }
        else if (currencyto == 'dinar' && value >= 0) {
            result = value;
        }
        else if (currencyto == 'nis' && value >= 0) {
            result = value*5.29;
        }
        else {
            result = 'not valid';
        }
    }
    document.querySelector(".result").textContent = result;

}

