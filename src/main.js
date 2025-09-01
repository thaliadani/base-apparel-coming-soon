let emailInput = document.getElementById('email');
let submitButton = document.getElementById('submit');

let errorMessage = document.getElementById('error-message');


function emailValidation(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!emailValidation(emailInput.value)) {
        emailInput.style.border = '2px solid #ff0000ff';
        emailInput.style.backgroundImage = 'url("./images/icon-error.svg")';
        emailInput.style.backgroundPosition = '500px';
        emailInput.style.backgroundRepeat = 'no-repeat';
        errorMessage.textContent = 'Please provide a valid email';
        errorMessage.style.color = '#ff0000ff';
        errorMessage.style.alignSelf = 'flex-start';
    }else{
        emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
        emailInput.style.backgroundImage = 'none';
        errorMessage.textContent = '';
    }
});