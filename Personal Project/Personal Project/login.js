function validation() {
 var email=document.getElementById('email').value;
 valid_email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 var password = document.getElementById('password').value;
 valid_password_regex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!(email.match(valid_email_regex)) || !(password.match(valid_password_regex))) {
         if (!(email.match(valid_email_regex))) {
            document.getElementById('email_error').style.visibility="visible";
            document.getElementById('email').style.borderColor="red";
        }else{
            document.getElementById('email_error').style.visibility="hidden";
            document.getElementById('email').style.borderColor="black";
        }
         if (!(password.match(valid_password_regex))) {
            document.getElementById('password_error').style.visibility="visible";
            document.getElementById('password').style.borderColor="red";
        }else{
            document.getElementById('password_error').style.visibility="hidden";
            document.getElementById('password').style.borderColor="black";
        }

         return false;
        }else{
            document.getElementById('email_error').style.visibility="hidden";
            document.getElementById('email').style.borderColor="black";
            document.getElementById('password_error').style.visibility="hidden";
            document.getElementById('password').style.borderColor="black";
            return true;    
        }}
