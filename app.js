const btn = document.querySelector("#reg");

btn.addEventListener('click', function (){
    document.querySelector("#form1").style.display = "flex";
    document.querySelector("#form2").style.display = "none";
})

const btn2 = document.querySelector("#log");

btn2.addEventListener('click', function (){
    document.querySelector("#form2").style.display = "flex";
    document.querySelector("#form1").style.display = "none";
})

const clos1 = document.querySelector("#close1");

clos1.addEventListener('click', function(){
    document.querySelector("#form1",).style.display = "none";
})

const clos2 = document.querySelector("#close2");

clos2.addEventListener('click', function(){
    document.querySelector("#form2",).style.display = "none";
})
