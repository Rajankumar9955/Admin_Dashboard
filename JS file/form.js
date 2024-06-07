
// function validate()
// {
// let id = document.getElementById('id').value;
// let Name = document.getElementById('nam').value;
// let contact = document.getElementById('number').value;
// let email = document.getElementById('email').value;
// let pass = document.getElementById('pass').value;
// let cpass = document.getElementById('cpass').value;


// if(Name=="")
// {
// alert("fill the name please")
// document.getElementById("Name").focus();
// return false;
// }
// else if(contact=="")
// {
//     alert("please enter your number")
//     document.getElementById("contact").focus();
//     return false;
// }
// else if(contact.lenght<10 || contact.lenght>10)
// {
// alert("please enter 10 digit mobile number")
// document.getElementById("contact").focus();
// return false;
// }
// else if(isNaN(contact))
// {
// alert("enter only number in contact")
// return false;
// }
// else if(email=="")
// {
// alert("plase fill the gmail")
// document.getElementById("email").focus();
// return false;

// }
// else if(pass=="")
// {
// alert("plese enter the password")
// document.getElementById("pass").focus();
// return false;

// }
// else if(cpass=="")
// {
// alert("enter the confirm password")
// document.getElementById("cpass").focus();
// return false;
// }
// else if(pass!=cpass)
// {
// alert("Doesn't match password");
// }
// else if(pass.match(/[!@#$%]/))
// {
// alert("please use special character");
// }
// }
// // =========watch==================
// let a=document.getElementById("time")
// setInterval(() => {
//     let s=new Date();
//     let r=s.toLocaleString()
//     a.innerHTML=r;
// },1000);
// // ==========================watch end=====================================================


//=============================API WORK=======================================================


// async function fun()
// {     let q=document.getElementById("data")
//     let n= await fetch("http://localhost:3000/student")
//     let p=await n.json()
//     let s=""
//     let v=p.map((e)=>s+=`
    
//     <tr>
//     <td>${e.id}<td>
//     <td>${e.nam}</td>
//     <td>${e.number}</td>
//     <td>${e.email}</td>
//     <td>${e.pass}</td>
//     <td>${e.cpass}</td>
//     <td><button onclick="mydelete(${e.id})>Delete</button></td>
//     `).join(" ")
//     q.innerHTML=v;
// }
// fun()



// function add()
// {
//     let from={
//      id:document.getElementById("id").value,
//       nam:document.getElementById("nam").value,
//       number:document.getElementById("number").value,
//       email:document.getElementById("email").value,
//       pass:document.getElementById("pass").value,
//       cpass:document.getElementById("cpass").value
//     }
//     fetch("http://localhost:3000/student",{
//         method:"POST",
//         header:{
//             content_type:'application/json',

//         },
//         body:JSON.stringify(from)
//     })
//     .then(res=>alert("success"))
// }

// function  mydelete(id){
//     fetch(`http://localhost:3000/student/${id}`,{
//         method:"Delete",
//     })
//     .then(res=>alert("Data delete successfully"))
// }