console.log("Script connected")

// Login button functionality
const loginBtn = document.getElementById("btn-login")
loginBtn.addEventListener('click', 
    function(event){
        event.preventDefault() // prevents the page getting refresh. dont need button type = button
        console.log(loginBtn)


})