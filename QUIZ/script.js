function redirectTo(url)
{
    window.location.href=url;
}
var userSet = JSON.parse(localStorage.getItem('userSet')) || {};
function registerUser()
{
    var username=document.getElementById("userinput").value.trim()
    var password=document.getElementById("passwordinput").value.trim()
    var mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(username)) {
        alert("Username should be a 10-digit mobile number.");}
    else if(userSet.hasOwnProperty(username)){
        alert('username already exist')}
    else{
        userSet[username]=password
        localStorage.setItem('userSet', JSON.stringify(userSet));
        console.log(userSet)
        alert('Registration Successful !')
        redirectTo('Login.html');
    }
    document.getElementById("userinput").value=""
    document.getElementById("passwordinput").value=""
}
function login()
{
    var username=document.getElementById("userinput").value.trim()
    var password=document.getElementById("passwordinput").value.trim()
    if(userSet.hasOwnProperty(username))
    {
        if(userSet[username]!=password)
        {
            alert('Incorrect password. Please enter the correct password.')
            
        }
        else{
            redirectTo('Quiz.html')
        }
    }
    else{
        alert('Username not found. Please register.')
        redirectTo('Registration.html')
    }
    document.getElementById("userinput").value=""
    document.getElementById("passwordinput").value=""
}
function resetPassword()
{
    var username=document.getElementById("userinput").value.trim()
    var password=document.getElementById("passwordinput").value.trim()
    if(userSet.hasOwnProperty(username))
    {
        userSet[username]=password
        localStorage.setItem('userSet', JSON.stringify(userSet))
        alert('Your password has been reset successfully')
        redirectTo('Login.html')
    }
    else{
        alert('Username not found. Please register.')
        redirectTo('Registration.html')
    }
    
}
function saveNote() {
    var noteContent = document.getElementById("text-area").value.trim();
    
    if (!noteContent) {
        alert("Please write something to save.");
        return;
    }

    localStorage.setItem("note", noteContent);
    alert("Note saved successfully!");
}

function loadNote() {
    var noteContent = localStorage.getItem("note");
    
    if (noteContent) {
        document.getElementById("text-area").value = noteContent;
        alert("Note loaded successfully!");
    } else {
        alert("No saved note found!");
    }
}

function clearNote() {
    document.getElementById("text-area").value = "";
}
