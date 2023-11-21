let id = (id) => document.getElementById(id)
const form = id("myForm")
const formDialog = id("modal")
const formx = {
    username: id("name"),
    email: id("email"),
    phone: id("phone"),
    pwd: id("password")
}

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailInput = formx.email;

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const pwdInput = formx.pwd

form.addEventListener("submit", (e) => {
    e.preventDefault()
    engine(formx.username, "user cannot be blank!")
    engine(formx.email, "email cannot be blank!")
    engine(formx.pwd, "password cannot be blank!")

    const notValid = Object.values(formx).some(x => x.value === null || x.value === '')

    if (emailRegex.test(emailInput.value.trim())) {
        setSuccess(emailInput);
        setSuccessMessage(emailInput, "Valid email address");
    } else {
        setWarning(emailInput, "Invalid email address");
    }

    const validPwd = pwdRegex.test(pwdInput.value.trim())
    if (validPwd) {
        setSuccess(pwdInput);
        setSuccessMessage(pwdInput, "Valid password pattern");
    } else {
        setWarning(pwdInput, "Invalid password pattern");
    }
    
    fetch('http://localhost:5500/users', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
            username: formx.username.value, 
            email: formx.email.value, 
            pwd: formx.pwd.value
        })
    })
        .then((response) => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Server response not okay');
            }
        })
        .then((data) => {
            console.log('Server response:', data);
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})

const engine = (input, message) => input.value.trim() === '' ? setError(input, message) : setSuccess(input)

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-content error';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-content success';
}

function setWarning(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-content warning';
}

function setSuccessMessage(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-content success';
}