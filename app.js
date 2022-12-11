const btn = document.querySelector("#reg");
const btn2 = document.querySelector("#log");
const registerForm = document.querySelector("#form1")
const loginForm = document.querySelector("#form2")
const clos1 = document.querySelector("#close1");
const clos2 = document.querySelector("#close2");

btn.addEventListener('click', function (){
    registerForm.style.display = "flex";
    loginForm.style.display = "none";
})

btn2.addEventListener('click', function (){
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
})


clos1.addEventListener('click', function(){
    registerForm.style.display = "none";
})


clos2.addEventListener('click', function(){
    loginForm.style.display = "none";
})
