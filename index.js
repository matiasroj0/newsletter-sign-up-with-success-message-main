const emailInput = document.querySelector(".email");
const subscribeBtn = document.querySelector(".subscribe");
const requiredError = document.querySelector(".required-error");
const card = document.querySelector(".card");
const success = document.querySelector(".success");
const successEmail = document.querySelector(".success-email");
const dismissBtn = document.querySelector(".dismiss-btn");

subscribeBtn.addEventListener("click", ()=> {
    if(!ValidateEmail()) {
        requiredError.classList.remove("invisible");
        emailInput.classList.add("email-error");
        console.log("error");
    }
    else {
        console.log("success");
        card.classList.add("invisible");
        success.classList.remove("invisible");
        successEmail.innerHTML = emailInput.value;
    }
})

dismissBtn.addEventListener("click", ()=> {
    card.classList.remove("invisible");
    success.classList.add("invisible");
})


function ValidateEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
        emailInput.focus();
        return true;
    }
    else {
        emailInput.focus();
        return false;
    }
}


