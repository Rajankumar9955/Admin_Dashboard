async function fun()
{
    let n= await fetch("http://localhost:3000/student")
    let p=await n.json()
    let s=""
    let q=document.getElementById("data")
    let v=p.map((e)=>s+=`
    
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.city}</td>
    <td>${e.occupation}</td>

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
