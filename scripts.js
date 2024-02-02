const form = document.querySelector("form")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")

form.addEventListener('submit', (event) => {

    if(password.value == confirmPassword.value){
        return true
    }else{
        event.preventDefault();
        alert("Password and Confirm password do not match.")
    }
})