const contactForm = document.querySelector('form');
const contactName = document.querySelector('#fname');
const contactEmail = document.querySelector('#email');
const contactSubject = document.querySelector('#subject');
const contactMessage = document.querySelector('#message');

contactForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    Email.send({
    Host: 'smtp.sendgrid.net',
    Username : 'apikey',
    Password : process.env.SENDGRID_API_KEY,
    to: contactEmail.value,
    From: process.env.PERSONAL_MAIL, // Change to your verified sender
    Subject: contactSubject.value,
    text: contactMessage.value,
    Body: `<strong>${contactName.value}</strong>`,
    }).then(
        message => alert("mail sent successfully")
    );
}
