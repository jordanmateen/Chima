// sign up page variable. 
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signUpBtn = document.getElementById('sign-up-btn');

const userData = {}

// Sign Up Page

firstName.addEventListener('change', (event)=>{
    userData['firstname'] = event.target.value
});
lastName.addEventListener('change', (event)=>{
    userData['lastname'] = event.target.value
});
username.addEventListener('change', (event)=>{
    userData['username'] = event.target.value
});
email.addEventListener('change', (event)=>{
    userData['email'] = event.target.value
});
password.addEventListener('change', (event)=>{
    userData['password'] = event.target.value
});

//JSON Javascript Object Notation JSON.stringify()   {} === "{}"
signUpBtn.addEventListener('click', (event)=>{
    localStorage.setItem('user', JSON.stringify(userData))
})