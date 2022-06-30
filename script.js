function toggleMenu(){
    const toggleMenu=document.querySelector('.toggleMenu');
    const navigation=document.querySelector('.navigation');
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}
const fname = document.getElementsByID('fname')
const lname = document.getElementsByID('lname')
const form = document.getElementsByID('form')
const errorElement = document.getElementsByID('error')

form.addEventListener('submit',(e) =>{
 let messages = []
 if(fname.value == ''|| fname.value == null){
    messages.push('First name is required')
 }   
if (messages.length > 0) {
   e.preventDefault()
   errorElement.innerText = messages.join(', ')  
}
form.addEventListener('submit',(e) =>{
 let messages1 = []
 if(lname.value == ''|| lname.value == null){
    messages1.push('Last name is required')
 }   
if (messages.length > 0) {
   e.preventDefault()
   errorElement.innerText = messages.join(', ')  
}

})