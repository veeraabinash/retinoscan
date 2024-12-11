var db = firebase.firestore()

// On document ready
$(document).ready(function() {
    $("#productModal").on("show.bs.modal", function(event) {
        var button = $(event.relatedTarget)
        var productId = button.data("product-id")
        var modal = $(this)
        modal.find(".modal-title").text("Enquiry for product " + productId)
        modal.find("#product-id").val(productId)
    })

    // Handle form submission
    $("#enquiry-form").submit(function(e) {
        e.preventDefault()

        var productId = $("#product-id").val()
        var name = $("#name").val()
        var phone = $("#phone").val()
        var email = $("#email").val()
        var comments = $("#comments").val()


        // Save data to Firestore
        db.collection("enquiries")
            .add({
                product_id: productId,
                name: name,
                email_id: email,
                phone: phone,
                comments: comments,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(function() {
                $("#productModal").modal("hide")
                alert("Your enquiry has been sent!")
                $("#enquiry-form")[0].reset()
            })
            .catch(function(error) {
                console.error("Error adding document: ", error)
            })

        let mailbody = `
            Hi ,
            You got a new product enquiry.
            <br>Product Id: ${productId}
            <br>Full Name: ${name}
            <br>Email ID: ${email}
            <br>Contact Number: ${phone}
            <br>Comments: ${comments}
        `

        Email.send({
            SecureToken: "5c46dbbb-6bfb-45ab-b9d4-9f5efe5b43bc",
            To: "webservices@artelus.com",
            From: "webservices@artelus.com",
            Subject: `You got a Product Enquiry from ${name} Product identity=> ${productId}`,
            Body: (mailbody),
        })
    })
})

document
    .querySelector(".subscribe-footer")
    .addEventListener("submit", function(e) {
        e.preventDefault() //prevent the form from submitting normally

        // let email = document.querySelector(".form-control").value;
        let email = document.getElementById("subscribeFooter").value
        console.log(email)
        db.collection("Newsletters")
            .add({
                email: email,
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id)
            })
            .catch((error) => {
                console.error("Error adding document: ", error)
            })

        Email.send({
            SecureToken: "5c46dbbb-6bfb-45ab-b9d4-9f5efe5b43bc",
            To: "webservices@artelus.com",
            From: "webservices@artelus.com",
            Subject: `You got a new subscriber ${email}`,
            Body: `Email Id: ${email}`,
        })
    })


async function sendContactForm() {
    // Get form inputs
    var name = document.getElementById('contact-name').value;
    var contactNo = document.getElementById('contact-no').value;
    var org = document.getElementById('contact-org').value;
    var jobTitle = document.getElementById('contact-jobtitle').value;
    var location = document.getElementById('contact-location').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    // Store to Firestore
    db.collection('contacts').add({
            name: name,
            contactNumber: contactNo,
            organisation: org,
            jobTitle: jobTitle,
            location: location,
            email: email,
            message: message
        })
        .then(function(docRef) {
            console.log('Document written with ID: ', docRef.id);

            Email.send({
                    SecureToken: "5c46dbbb-6bfb-45ab-b9d4-9f5efe5b43bc",
                    To: "webservices@artelus.com",
                    From: "webservices@artelus.com",
                    Subject: `You got a new contact enquiry from ${email}`,
                    Body: `Hi, someone enquired in the Contact Us Page
                        <br><h3>Details</h3><br>
                        <br><b>Email Id:</b> ${email}
                        <br><b>Full Name:</b> ${name},
                        <br><b>Contact Number:</b> ${contactNo},
                        <br><b>Organisation Name:</b> ${org},
                        <br><b>Job Title:</b> ${jobTitle},
                        <br><b>Location:</b> ${location},
                        <br><b>Message:</b> ${message}`,
                })
                .then(function(response) {
                    // Email sent successfully
                    console.log('Email sent:', response);

                    // Show the success alert
                    document.getElementById('success-alert').style.display = 'block';

                    // Clear the form
                    document.getElementById('contact-name').value = '';
                    document.getElementById('contact-no').value = '';
                    document.getElementById('contact-org').value = '';
                    document.getElementById('contact-jobtitle').value = '';
                    document.getElementById('contact-location').value = '';
                    document.getElementById('contact-email').value = '';
                    document.getElementById('contact-message').value = '';
                })
                .catch(function(error) {
                    // Error sending email
                    console.error('Error sending email:', error);
                });
        })
        .catch(function(error) {
            console.error('Error adding document: ', error);
        });
}