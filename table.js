async function fun()
{
    let n= await fetch("http://localhost:3000/student")
    let p=await n.json()
    let s=""
    let q=document.getElementById("data")
    let v=p.map((e)=>s+=`
    
    <tr>
    <td>${e.nam}</td>
    <td>${e.number}</td>
    <td>${e.email}</td>
    <td>${e.pass}</td>
    <td>${e.cpass}</td>
    `).join(" ")
    q.innerHTML=v;
}
fun()

let a=document.getElementById("time")
setInterval(() => {
    let b= new Date();
    let s=b.toLocaleString();
    a.innerHTML=s;
},1000);
