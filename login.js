function retrieveData(){
    if(typeof(Storage)!== "undefined"){
        console.log("Values in retriveData Function");
        console.log(localStorage.getItem("Email"));
        console.log(localStorage.getItem("Password"));
    } else {
        alert("Not working");
    }
}

function login(){
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let emailSaved = localStorage.getItem("Email");
    let pwdSaved = localStorage.getItem("Password");

    if (email.length === 0 || password.length === 0) {
        attempt--;
        alert("Please enter user name and password! You have left "+ attempt+ " attempts");

    if (attempt === 0){
        document.getElementById("inputEmail").disabled = true;
        document.getElementById("inputPassword").disabled = true;
        document.getElementById("submit").disabled = true;
    }
    } else {
        if(email === emailSaved && password === pwdSaved) {
            alert("Credentials validated");
            location.assign("index.html");
        } else {
            alert("Sorry! Wrong Credentials, please try again.")
        }
    }
}
