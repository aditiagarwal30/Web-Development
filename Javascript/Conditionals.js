let a = prompt("what is your age?")

a = Number.parseInt(a)
if(a<=0){
  alert("Age is invalid")
}
else{
  if (a > 18) {
    alert("You are allowed to drive")
  }
  else {
    alert("You are kid")
  }
}
