// Log-in button script
document.getElementById("login-btn")
.addEventListener('click', function () {
    console.log("saad")
    const userName = document.getElementById("username")
    const passWord = document.getElementById("password")
    // console.log(userName,passWord)

    if(userName.value === "admin" && passWord.value === "1234") {
        console.log("Yes")
        alert("Log-in Success")
        window.location.assign("./home.html")
    }else{
        alert("Please input right ")
    }
    
})