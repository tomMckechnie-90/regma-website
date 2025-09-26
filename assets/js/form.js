// Contact form logic (AJAX) this is to overide the formspree thank you page and 
// redirect to my thank-you.html without activated the upgrade on my formspree account

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                window.location.href = 'https://regmawebdesign.co.uk/thank-you.html';
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert ('Opps! There was a problem submitting your form');
                    }
                })
            }
        }).catch(error => {
            alert ('Opps! There was a problem submitting your form');
        });
    });
}