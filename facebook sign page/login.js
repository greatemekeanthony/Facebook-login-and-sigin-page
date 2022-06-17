

const email= document.getElementById('email');
const password= document.getElementById('password');
const form = document.getElementById('form')
const error = document.getElementById('error')

 
form.addEventListener('submit', (e) =>{
    let message = []
    if(email.value ===''|| email.value == null  ){
        message.push('email is empty')
        password.style.border='3px solide red'
        
        
        
    }
    if (password.value ==='' || password.value ===null) {
        message.push('password is empty')
        
    }


    



    
    if (message.length >0) {
        e.preventDefault()
        error.innerText = message.join(' ,')

        
    }
   

    
})


// console.log(message.va);
// console.log(email.value);
// console.log(password);
// console.log(form);

