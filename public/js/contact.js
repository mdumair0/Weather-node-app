const contactForm = document.querySelector('form');
const contactName = document.querySelector('#fname');
const contactEmail = document.querySelector('#email');
const contactSubject = document.querySelector('#subject');
const contactMessage = document.querySelector('#message');
contactForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const msg = {
        contactName: contactName.value,
        contactEmail: contactEmail.value,
        contactSubject: contactSubject.value,
        contactMessage: contactMessage.value
    }
    mail(msg)
})

const mail = (mail) =>{
    fetch( `/mail?msg=${mail}` )
}