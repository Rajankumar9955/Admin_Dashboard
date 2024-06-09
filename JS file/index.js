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