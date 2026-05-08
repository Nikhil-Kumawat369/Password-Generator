// This JS File Includes The Final Main Code In Action

// Importing dom.js
import * as DOM from "./dom.js";

// Importing script.js
import * as fun from "./function.js";


// Event Listner to show the live length of the password
DOM.passwordLengthSelectorRange.addEventListener("input" , () => {
    DOM.passwordLengthDisplay.innerText = DOM.passwordLengthSelectorRange.value;
});

// Event Listner To Generate The Password & Display it
DOM.generatePasswordBtn.addEventListener("click" , () => {

    DOM.displayPasswordArea.innerText = fun.generatePassword(DOM.IncludeUppercaseCheckbox , DOM.IncludeLowercaseCheckbox , DOM.IncludeNumberCheckbox , DOM.IncludeSymbolCheckbox , DOM.passwordLengthSelectorRange);
    
});

// Event Listner To Copy The Generated Password Displayed On The Screen , By Clicking The Copy Symbol
// Also Showing A Copy PopUp
DOM.copyBtn.addEventListener("click" , () => {

    // Copying The Password
    if(DOM.displayPasswordArea === "Error"){
        navigator.clipboard.writeText("");
    }else{
        navigator.clipboard.writeText(DOM.displayPasswordArea.innerText);
    }

    // Showing The PopUp
    DOM.copyPopup.classList.toggle("show");
    
    setTimeout(() => {
        DOM.copyPopup.classList.toggle("show");
    } , 1500);

});