import emailjs from '@emailjs/browser'

export default function sendMail(props){
    let params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_nm35b2f", "template_6tv2iy9", params).then(function (response) {
        alert("Messasge sent!")
    })
}



