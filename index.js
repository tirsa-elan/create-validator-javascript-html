const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const btn = document.getElementById('btn');


function showError(input, massage) {
    const formControl = input.parentElement;
    //انگار داری گت المنت میکنی دایو پر که شامل ایمنپوته
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = massage;
}

function showSessuse(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSessuse(input);
    }
    else {
        showError(input, "emil is not corect")
    }
}

function checkRequired(array) {
    let isRequired = false;
    array.forEach(function (input) {
      if (input.value.trim() === '') {
        showError(input, "empytyyyy");
        isRequired = true;
      } else {
        showSessuse(input)
      }

     
    });
    return isRequired;
}


function checkLength(input, max, min) {
    if (input.value.length < min) {
        showError(input, "min error")
    }
    else if(input.value.length > max) {
        showError(input, "max error")
    }
    else{
        showSessuse(input)
    }
}

function checkPasswordsMatch(input1 , input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkRequired([username, email, password, confirmpassword])) {
    
      checkLength(username, 3, 12);
      checkLength(password, 6, 12);
      checkEmail(email);
      checkPasswordsMatch(password, confirmpassword);
    }
  });
