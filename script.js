
function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234")
location.href="admin.html";

else if(u==="staff" && p==="1111")
location.href="staff.html";

else if(u!=="" && p!=="")
location.href="client.html";

else
document.getElementById("msg").innerText="Enter login details";
}

function dark(){
document.body.classList.toggle("dark");
}

// CLIENT SAVE
function addClient(){
let arr=JSON.parse(localStorage.getItem("clients")||"[]");
arr.push({name:name.value,email:email.value});
localStorage.setItem("clients",JSON.stringify(arr));
loadClients();
}

// LOAD CLIENT
function loadClients(){
let arr=JSON.parse(localStorage.getItem("clients")||"[]");
if(!document.getElementById("clients")) return;
clients.innerHTML="";
arr.forEach(c=>clients.innerHTML+=c.name+"<br>");
}
loadClients();

// INVOICE
function invoice(){
let arr=JSON.parse(localStorage.getItem("inv")||"[]");
arr.push({name:iname.value,price:price.value});
localStorage.setItem("inv",JSON.stringify(arr));
loadInv();
}

function loadInv(){
let arr=JSON.parse(localStorage.getItem("inv")||"[]");
if(!document.getElementById("invoices")) return;
invoices.innerHTML="";
arr.forEach(i=>invoices.innerHTML+=i.name+" ₹"+i.price+"<br>");
}
loadInv();

// BOOK
function book(){
let arr=JSON.parse(localStorage.getItem("app")||"[]");
arr.push({name:n.value,date:d.value});
localStorage.setItem("app",JSON.stringify(arr));
alert("Appointment Booked");
}

// CLIENT INVOICE VIEW
if(document.getElementById("inv")){
let arr=JSON.parse(localStorage.getItem("inv")||"[]");
arr.forEach(i=>inv.innerHTML+=i.name+" ₹"+i.price+"<br>");
}
