//document.write("Welcome to JS")

//const btn=document.getElementById("btn")     //event listner

function say(){
     const username=document.getElementById("username").value
     const para=document.getElementById("para")
     const msg=(username +" Welcome")
     para.textContent=msg

     para.classList="p"
}

//btn.addEventListener("click",say)     //event listner