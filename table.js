async function fun()
{
    let n= await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    let p=await n.json()
    let s=""
    let q=document.getElementById("data")
    let v=p.map((e)=>s+=`
    
    <tr>
    <td>${e.id}</td>
    <td>${e.albumId}</td>
    <td>${e.title}</td>
    <td><img src="${e.url}"</td>

    `).join()
    q.innerHTML=v;
}
fun()