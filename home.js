function getValue (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;

    const inputFieldNumber = parseInt(inputFieldValue);

    return inputFieldNumber;
}

const btn = document.getElementById('btn-submit')
 
btn.addEventListener('click', function(e){
    e.preventDefault();

    console.log(getValue('select-bank'))

    
    
})