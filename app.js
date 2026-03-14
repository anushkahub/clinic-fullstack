
const API="http://localhost:5000/api";

function login(){
fetch(API+"/auth/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
email:document.getElementById("email").value,
password:document.getElementById("password").value
})
})
.then(r=>r.json())
.then(d=>{
localStorage.setItem("token",d.token);
alert("Login success");
});
}

function book(){
fetch(API+"/appointments/book",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
patientName:document.getElementById("name").value,
date:document.getElementById("date").value,
message:document.getElementById("msg").value
})
})
.then(r=>r.json())
.then(()=>alert("Appointment booked"));
}
