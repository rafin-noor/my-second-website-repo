function handlesubscribe(event){
    event.preventDefault();
    const your_email = event.target.send_email.value;
    console.log(your_email);
    const showemail = document.getElementById("show_the_text");
    const inputemail= document.createElement("p");
    inputemail.innerText = `Your Email: ${your_email}`;
    showemail.appendChild(inputemail);
    
}

function anotherform(event){
    event.preventDefault();
    const mail = event.target.email_send.value;
    console.log(mail);
    const anotherdiv = document.getElementById("see_email");
    const emailtag = document.createElement("p");
    emailtag.innerText=`Your Email: ${mail}`;
    anotherdiv.appendChild(emailtag);

}

