

function myfunction(){
    var x =document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function numberlist(){
    
}

function validate(){
    var password = document.getElementById("password");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Succesfull");
        window.location.replace("index.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}

function lpage(){
    window.location.replace("index.html");
}




document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        
        alert('Username: ' + username + '\nPassword: ' + password);
        window.location.replace("index.html");
    } else {
      alert("please fill the details");
    }
});



















