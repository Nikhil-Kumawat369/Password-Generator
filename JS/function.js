// This JS File Includes All The Functions Or Sub-Functions Used For The Card

// Importing dom.js
import * as DOM from "./dom.js";

// This Function Generates Random Password Based On All The Constraints
export function generatePassword (IncludeUppercaseCheckbox , IncludeLowercaseCheckbox , IncludeNumberCheckbox , IncludeSymbolCheckbox , passwordLengthSelectorRange) {

    // First Making The Character Pool Out Of Which The Password Must Be Made
    let CharacterPool = "";

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-={}[]|:;<>,.?/";

    if(IncludeUppercaseCheckbox.checked){
        CharacterPool += uppercase;
    }
    if(IncludeLowercaseCheckbox.checked){
        CharacterPool += lowercase;
    }
    if(IncludeNumberCheckbox.checked){
        CharacterPool += numbers;
    }
    if(IncludeSymbolCheckbox.checked){
        CharacterPool += symbols;
    }

    // If User Selects No Option , Then Return The Following
    if(CharacterPool.length === 0){
        return "Error";
    }

    // Now Generating The Password 
    let passwordLength = Number(passwordLengthSelectorRange.value);
    let password = "";

    for(let i = 1; i <= passwordLength; i++) {
        
        let idx = Math.floor(Math.random() * CharacterPool.length);
        password += CharacterPool[idx];

    }

    // Now Checking If The Password Does Include Each Type Of Character Or Not

    // Initial Value Is False
    let regeneratePassword = false;

    if(IncludeUppercaseCheckbox.checked){
        if(!(/[A-Z]/.test(password))){
            regeneratePassword = true;
        }
    }
    if(IncludeLowercaseCheckbox.checked){
        if(!(/[a-z]/.test(password))){
            regeneratePassword = true;
        }
    }
    if(IncludeNumberCheckbox.checked){
        if(!(/[0-9]/.test(password))){
            regeneratePassword = true;
        }
    }
    if(IncludeSymbolCheckbox.checked){
        if(!(/[^A-Za-z0-9]/.test(password))){
            regeneratePassword = true;
        }
    }

    // If Password Needs To Be ReGenerated Then
    // This Loop Will Run Infinitely Till A Password Which Include All The Chosen Category Of Character Is Not Included
    while(regeneratePassword){

        // Now Generating The Password 
        password = "";

        for(let i = 1; i <= passwordLength; i++) {
            
            let idx = Math.floor(Math.random() * CharacterPool.length);
            password += CharacterPool[idx];

        }

        // Now Checking If The Password Does Include Each Type Of Character Or Not

        // Initial Value Is False
        regeneratePassword = false;

        if(IncludeUppercaseCheckbox.checked){
            if(!(/[A-Z]/.test(password))){
                regeneratePassword = true;
            }
        }
        if(IncludeLowercaseCheckbox.checked){
            if(!(/[a-z]/.test(password))){
                regeneratePassword = true;
            }
        }
        if(IncludeNumberCheckbox.checked){
            if(!(/[0-9]/.test(password))){
                regeneratePassword = true;
            }
        }
        if(IncludeSymbolCheckbox.checked){
            if(!(/[^A-Za-z0-9]/.test(password))){
                regeneratePassword = true;
            }
        }

    }

    return password;

}

// This Function Evalutes Passowrd's & Return { Week or Medium or Strong }
export function passwordStrengthEval () {
    
    let password = generatePassword(DOM.IncludeUppercaseCheckbox , DOM.IncludeLowercaseCheckbox , DOM.IncludeNumberCheckbox , DOM.IncludeSymbolCheckbox , DOM.passwordLengthSelectorRange);

    // Lets Eval Password strength based on different factors
    // Total points = 7
    // if point <= 3 -> Week
    // if point <= 6 -> Medium
    // if point === 7 -> Strong
    let passwordStrength = 0;

    if(password.length >= 8){
        passwordStrength++;
    }
    if(password.length >= 12){
        passwordStrength++;
    }
    if(password.length >= 16){
        passwordStrength++;
    }
    if(/[A-Z]/.test(password)){
        passwordStrength++;
    }
    if(/[a-z]/.test(password)){
        passwordStrength++;
    }
    if(/[0-9]/.test(password)){
        passwordStrength++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
        passwordStrength++;
    }

    // Lets return the password strength
    if(passwordStrength <= 3){
        return "Week";
    }else if(passwordStrength <= 6){
        return "Medium";
    }else if(passwordStrength === 7){
        return "Strong";
    }

}

// On based on the password strength it changes the strength bar text & theme
export function passwordStrengthBarCssChange () {
    
    if(passwordStrengthEval() === "Week"){
        DOM.passwordStrengthValue.innerText = "Week";
        DOM.passwordStrengthValue.style.color = "rgb(239, 83, 80)";
        DOM.passwordStrengthBarInner.style.background = "linear-gradient(90deg, rgb(255, 138, 128), rgb(239, 83, 80))";
        DOM.passwordStrengthBarInner.style.width = "33%";
    }
    if(passwordStrengthEval() === "Medium"){
        DOM.passwordStrengthValue.innerText = "Medium";
        DOM.passwordStrengthValue.style.color = "rgb(255, 167, 38)";
        DOM.passwordStrengthBarInner.style.background = "linear-gradient(90deg, rgb(255, 204, 128), rgb(255, 167, 38))";
        DOM.passwordStrengthBarInner.style.width = "66%";
    }
    if(passwordStrengthEval() === "Strong"){
        DOM.passwordStrengthValue.innerText = "Strong";
        DOM.passwordStrengthValue.style.color = "rgb(76, 175, 125)";
        DOM.passwordStrengthBarInner.style.background = "linear-gradient(90deg, rgb(102, 224, 145), rgb(76, 175, 125))";
        DOM.passwordStrengthBarInner.style.width = "100%";
    }

}