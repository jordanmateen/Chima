const signUpBtn = document.getElementById('sign-up-btn');
const waitlistInput = document.getElementById('waitlist-form');
const successMsg = document.getElementById('success-msg');
successMsg.style.color="rgb(182, 180, 180)"
successMsg.style.font = "Manrope"

let waitlistInputValue = ''

// function click(event){
//     alert('hello from the other side')
// }


// Click -> click -> onclick -> onClick
signUpBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    // alert(waitlistInputValue)
    successMsg.innerHTML = `Hey ${waitlistInputValue}, Gotcha covered well will talk soon!`

});

// Change = typing -> change -> onchange -> onChange
waitlistInput.addEventListener('change', (event)=>{
    console.log(event.target.value)
    waitlistInputValue = event.target.value
    event.target.value=''
})


// Enter
waitlistInput.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        console.log(event.target.value)
        waitlistInputValue = event.target.value
        successMsg.innerHTML = `Hey ${waitlistInputValue}, Gotcha covered well will talk soon!`
    }
});