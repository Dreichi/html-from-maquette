const form = document.getElementById('PostForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    }

    const errors = {
        firstName: document.getElementById('firstNameError'),
        lastName: document.getElementById('lastNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        message: document.getElementById('messageError')
    }
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameRegex = /^[a-zA-Z ]+$/;


    let error = false;

if (!formData.firstName || !nameRegex.test(formData.firstName)) {
    errors.firstName = true;
    firstNameError.style.display = 'block';
}
if (!formData.lastName || !nameRegex.test(formData.lastName)) {
    errors.lastName = true;
    lastNameError.style.display = 'block';
}
if (!formData.phone || !phoneRegex.test(formData.phone)) {
    errors.phone = true;
    phoneError.style.display = 'block';
}
if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = true;
    emailError.style.display = 'block';
}
if (!formData.message || formData.message.length === 0) {
    errors.message = true;
    messageError.style.display = 'block';
}
if (!Object.values(errors).includes(true)) {
    console.log(formData)
    axios.post('http://212.83.176.255:3030/contact', formData,{
        })
            .then((response) => {
                console.log(response.data);
                PostForm.appendChild(document.createTextNode(response.data.message));
            })
    }
})