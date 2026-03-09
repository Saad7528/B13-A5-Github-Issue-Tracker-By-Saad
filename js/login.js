// Log-in button script
const loginBtn = document.getElementById("login-btn")
loginBtn.addEventListener('click', function () {
    // console.log("saad")
    const userName = document.getElementById("username")
    const passWord = document.getElementById("password")
    // console.log(userName,passWord)

    if(userName.value === "admin" && passWord.value === "admin123") {
        alert("Log-in Success")
        window.location.assign("./home.html")
    }else{
        alert("Please Input Correct Username, Password")
        return  
    }
    
})

