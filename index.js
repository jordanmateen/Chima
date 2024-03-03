
// variables declarations
const signUpBtn = document.getElementById('sign-up-btn');
const waitlistInput = document.getElementById('waitlist-form');
const successMsg = document.getElementById('success-msg');

let waitlistInputValue = ''

// Homepage 
// Click -> click -> onclick -> onClick
signUpBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    successMsg.style.color="rgb(182, 180, 180)"
    successMsg.style.font = "Manrope"
    successMsg.innerHTML = `Hey ${waitlistInputValue}, Gotcha covered well will talk soon!`
    localStorage.setItem(`${waitlistInputValue}`, JSON.stringify({email: waitlistInputValue})) //  localStorage.setItem(key, value)

    setTimeout(()=>{
        successMsg.innerHTML=''
    }, 3000)
});

// Change = typing -> change -> onchange -> onChange
waitlistInput.addEventListener('change', (event)=>{
    console.log(event.target.value)
    waitlistInputValue = event.target.value
})

// Event Type: Blur. This allows us to perform actions when the user loses focus on an element. 
waitlistInput.addEventListener('blur', (event)=>{
    event.target.value =''
})

// Enter
waitlistInput.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        // console.log(event.target.value)
        waitlistInputValue = event.target.value
        successMsg.style.color="rgb(182, 180, 180)"
        successMsg.style.font = "Manrope"
        successMsg.innerHTML = `Hey ${waitlistInputValue}, Gotcha covered well will talk soon!`
        localStorage.setItem(`${waitlistInputValue}`, JSON.stringify({email: waitlistInputValue}))

        setTimeout(()=>{
            successMsg.innerHTML=''
        }, 3000)
    }
});
