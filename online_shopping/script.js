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
            redirectTo('Menu.html')
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