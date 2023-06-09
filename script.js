// let button = document.querySelector(".btn1");

function validate(e) {
    // e.preventDefault();

    let emaill = document.getElementById("Email1").value;
    let pass = document.getElementById("Password1").value;
    let validate_email = "dipti.m@gmail.com";
    let validate_pass = "dipti";
    if(emaill == "" && pass == ""){

         document.getElementById("message1").innerHTML="** Please fill the Email";
         document.getElementById("message2").innerHTML="** Please fill the password";

       
    }
    else {
        if(validate_email != emaill && validate_pass != pass ){
            document.getElementById("message1").innerHTML="** Incorrect Email id ";
            document.getElementById("message2").innerHTML="**Incorrect password"
            
        }else if(emaill !=  validate_email  &&  pass == validate_pass  ){
            document.getElementById("message1").innerHTML="** Incorrect Email id Correct password ";
        }else if(validate_email == emaill && validate_pass != pass ){
            document.getElementById("message2").innerHTML="** correct Email id but correct password";
        }
        
}
}







// button.addEventListener("click",validate);

