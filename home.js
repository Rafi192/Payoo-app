function getValue (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;

    const inputFieldNumber = parseInt(inputFieldValue);

    return inputFieldNumber;
}

function getInnerText (id){
    const text = document.getElementById(id)
    const string_text = text.innerText;
    //for converting inner text values into number for calculation
    const textToNum = parseInt(string_text);
    return textToNum;
}

function getInnerValue (id){
    const text = document.getElementById(id)
    let innerValue = text.value;
    //for converting inner text values into number for calculation
    // const textToNum = parseInt(string_text);
    return innerValue;
}




const btn = document.getElementById('btn-submit')
 
btn.addEventListener('click', function(e){
    e.preventDefault();

    console.log(getValue('select-bank'))
    console.log(getInnerText('amount'));
    
})

