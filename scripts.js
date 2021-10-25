/* Add your JavaScript to this file */
window.onload = function() {
    let submitButton = document.getElementsByClassName("btn");
    submitButton[1].addEventListener("click", function(event) { 
        event.preventDefault();
        let email = document.getElementById('email').value;
        let msg = document.getElementsByClassName("message");
        console.log(email);
        if (email){
            msg.innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
        else{
            msg.innerHTML = `Please enter a valid email address`;
        }
    });
}