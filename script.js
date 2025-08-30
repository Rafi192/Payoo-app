console.log("Script connected")

// Login button functionality
const loginBtn = document.getElementById("btn-login")
loginBtn.addEventListener('click', 
    function(event){
        event.preventDefault() // prevents the page getting refresh. dont need button type = button
        // console.log("Button clicked")
        // console.log(event)
        const mobileNumber = 1571422556;
        const pinNumber  = 1234;
        const mobileValue = document.getElementById('input-mobile')
        const pinValue = document.getElementById('input-pin')

        if(parseInt(mobileValue.value) === mobileNumber && parseInt(pinValue.value) === pinNumber){
            window.location.href='./homepage.html'
            
        }
        else{
            console.log("Invalid Credentials")
        }



})