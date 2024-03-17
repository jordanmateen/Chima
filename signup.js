// sign up page variable. 
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signUpBtn = document.getElementById('sign-up-btn');


// Validations

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const setError = (element, message) => { 
    const parentElement = element.parentElement // This is the parent element the current element
    const errorDisplay = parentElement.querySelector('.errMsg')
    element.classList.add('error')
    errorDisplay.innerText = message
}

const setSuccess = (element) => { 
    const parentElement = element.parentElement // This is the parent element the current element
    const errorDisplay = parentElement.querySelector('.errMsg')
    element.classList.remove('error')
    errorDisplay.innerText = ''
}

const validateform = () => {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()


    if(firstNameValue === ''){
        //add error
        setError(firstName, 'Please enter a non-emtpy value for First Name')
    }
    if(lastNameValue === ''){
        //add error
        setError(lastName, 'Please enter a non-emtpy value for Last Name')
    }
    if(usernameValue === ''){
        //add error
        setError(username, 'Please enter a non-emtpy value for Username')
    }
    if(emailValue === ''){
        //add error
        setError(email, 'Please enter a non-emtpy value for Email')
    }
    if(passwordValue === ''){
        //add error
        setError(password, 'Please enter a non-emtpy value for password')
    }
}

const isEmpty = () => {
    return firstName.value === '' || lastName.value === '' || username.value === '' || email.value === '' || password.value === ''
}



// Sign Up Page


firstName.addEventListener('change', (event)=>{
    if(event.target.value !== ''){ // !==  - NOT EQUAL
        firstName.value = event.target.value
        setSuccess(firstName)
    }else {
        setError(firstName, 'Please enter a non-emtpy value for First Name')
    }
});
lastName.addEventListener('change', (event)=>{
    lastName.value = event.target.value
    if(event.target.value !== ''){ // !==  - NOT EQUAL
        lastName.value = event.target.value
        setSuccess(lastName)
    }else {
        setError(lastName, 'Please enter a non-emtpy value for Last Name')
    }
});
username.addEventListener('change', (event)=>{
    username.value = event.target.value
    if(event.target.value !== ''){ // !==  - NOT EQUAL
        username.value = event.target.value
        setSuccess(username)
    }else {
        setError(username, 'Please enter a non-emtpy value for Username')
    }
});
email.addEventListener('change', (event)=>{
    email.value = event.target.value
    if(event.target.value !== ''){ // !==  - NOT EQUAL
        if(validateEmail(event.target.value)){
            email.value = event.target.value
            setSuccess(email)
        }else{
            setError(email, 'Email not valid bc of conditions')
        }
    }else {
        setError(email, 'Please enter a non-emtpy value for Email Name')
    }
});
password.addEventListener('change', (event)=>{
    password.value = event.target.value
    if(event.target.value !== ''){ // !==  - NOT EQUAL
        password.value = event.target.value
        setSuccess(password)
    }else {
        setError(password, 'Please enter a non-emtpy value for Password Name')
    }
});


//JSON Javascript Object Notation JSON.stringify()   {} === "{}"
signUpBtn.addEventListener('click', (event)=>{
    validateform(); // initiation
    if(!isEmpty()){
        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            username: username.value,
            email: email.value,
            password: password.value
        }
        localStorage.setItem('user', JSON.stringify(userData))
    }
})