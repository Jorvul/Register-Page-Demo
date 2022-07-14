function validateFName(){
    let length = document.getElementById("firstName").value.length;
    if(length < 5 || length > 10) {
        document.getElementById("firstNameMessage").innerHTML = "First name should have minimum 5 characters";
    } else {
        firstNameFlag = true;
        document.getElementById("firstNameMessage").innerHTML = " ";
    }
}

function validateLName(){
    let length = document.getElementById("lastName").value.length;
    if (length < 5 || length > 10) {
		document.getElementById('lastNameMessage').innerHTML = 'Last name should have minimum 5 characters';
	} else {
		lastNameFlag=true;
		 document.getElementById('lastNameMessage').innerHTML = '';
	}
}

function validatePhoneNumber(){
    let phonePattern = new RegExp("[0-9]{10}");
    if(!(phonePattern.test(document.getElementById("mobile").value))){
        document.getElementById("mobileMessage").innerHTML = "Phone should have at least 10 digits";
    } else {
        mobileFlag = true;
        document.getElementById("mobileMessage").innerHTML = "";
    }
}

function validateEmail(){
	var emailPattern = new RegExp("(?=.*@)(?=.+.com)");
		if (!(emailPattern.test(document.getElementById("email").value))) {
			document.getElementById('emailMessage').innerHTML = 'Email id should contain @ and .com in it';
		}
         else {
				emailFlag=true;
				document.getElementById('emailMessage').innerHTML = '';
		}
}

function validatePassword(){
    var passwordPattern = new RegExp("(?=.*\[0-9])(?=.*[a-zA-Z])(?=.*[@#$%!^&*+_])");
       if (!(passwordPattern.test(document.getElementById("password").value))){
           document.getElementById('passwordMessage').innerHTML = 'Weak password!!';
       }
       else{
           passwordFlag=true;
           document.getElementById('passwordMessage').innerHTML = '';
       }
}

function setUserValue()
{
     if(firstNameFlag && lastNameFlag && emailFlag && mobileFlag && passwordFlag){
        localStorage.setItem('Email',document.getElementById("email").value);
        localStorage.setItem('Password',document.getElementById("password").value);
        localStorage.setItem('Username',document.getElementById("firstName").value);
        alert('Thanks for registration. Your details are saved!');
        location.assign('login.html');
     }
     else{
    	 alert('Please enter all the fields appropriately!!!');
     }
}
