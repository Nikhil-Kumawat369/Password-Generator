// This JS File Includes All The Functions Or Sub-Functions Used For The Card

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

    // Now Generating The Password 
    let passwordLength = Number(passwordLengthSelectorRange.value);
    let password = "";

    for(let i = 1; i <= length; i++) {
        
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
        if(!(/^[A-Za-z0-9]/.test(password))){
            regeneratePassword = true;
        }
    }

    // If Password Needs To Be ReGenerated Then
    // This Loop Will Run Infinitely Till A Password Which Include All The Chosen Category Of Character Is Not Included
    while(regeneratePassword){

        // Now Generating The Password 
        password = "";

        for(let i = 1; i <= length; i++) {
            
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
            if(!(/^[A-Za-z0-9]/.test(password))){
                regeneratePassword = true;
            }
        }

    }

    console.log(password);

    return password;

}