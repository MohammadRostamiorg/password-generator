const genBtn = document.getElementById('generateBtn')
const generatedPasswordInput = document.getElementById('generatedPassword')
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghigklmnopqrstuvwxyz"
const specialCharacters = "~!@#$%^&*()_+|}{:;?.>,<"

function showPass(){
    let password = "";
    let availableCharacters = "0123456789"
    let passCount = document.getElementById('passCount')
    let specialCharactersInput = document.getElementById('specialCharacters');
    let capitalLettersInput = document.getElementById('capitalCase')
    let lowercaseLettersInput = document.getElementById('lowerCase')


    if (specialCharactersInput.checked){
        availableCharacters += specialCharacters;
    }
    if (capitalLettersInput.checked){
        availableCharacters += capitalLetters;
    }
    if (lowercaseLettersInput.checked){
        availableCharacters += lowercaseLetters;
    }

    for (i = 0; i < passCount.value; i++) {
      let newCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
      password += newCharacter;
    }
    generatedPasswordInput.value = password;
}




genBtn.addEventListener('click',showPass);


document.getElementById('copyBtn').addEventListener('click', ()=>{
    navigator.clipboard.writeText(generatedPasswordInput.value);
    alert('password copied to clipbord')
})