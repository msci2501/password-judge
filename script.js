const passwordInput = document.getElementById('passInput');
const strengthText = document.getElementById('strengthText');

const hasNumber = /\d/; // Checks for any digit
const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/; // Checks for any of these symbols
const hasUpper =  /[A-Z]/

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  // 1. Check for specific requirements
  const longEnough = val.length >= 8;
  const containsNumber = hasNumber.test(val);
  const containsSpecial = hasSpecial.test(val);
  const containsUpper =  hasUpper.test(val);
  
  // 2. The Judge's Decision
  
 
  
  if (val.length === 0) {
    strengthText.innerText = "Waiting...";
    strengthText.style.color = "gray";
  
  } else if (containsUpper && longEnough && containsNumber && containsSpecial) {
 
    strengthText.innerText = "Strong (Secure!)";
    strengthText.style.color = "green";
  
  } else if (val.length >= 8) {
    strengthText.innerText = "Medium (Add numbers or symbols or uppercase)";
    strengthText.style.color = "orange";
 
  } else {
    strengthText.innerText = "Weak (Too short)";
    strengthText.style.color = "red";
  }
  
});




const showPassCheckbox = document.getElementById('showPass');


showPassCheckbox.addEventListener('change', () => {
  // If the checkbox is checked, type is 'text', otherwise 'password'
  if (showPassCheckbox.checked) {
    passwordInput.type = 'text';
      
  } else {
    
    passwordInput.type = 'password';
    
  } 
    
});
 
