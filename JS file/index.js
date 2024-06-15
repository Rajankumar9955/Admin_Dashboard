let a = document.getElementById("time")
setInterval(() => {
    let s = new Date();
    let b = s.toLocaleString();
    a.innerHTML=b;
},1000);
//==================dark========
function darkk(){
    document.body.classList.toggle('dark')
}

// ========jquiry of home page of container 3
$(document).ready(function()
{
   
      
 
    $('#main-container').slideDown(2000);
})
