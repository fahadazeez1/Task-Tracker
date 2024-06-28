const inpuT=document.querySelector(".in")
let btn=document.querySelector(".btn")
const ul=document.querySelector(".uli")
play=false
let k =new Audio("no.mp3.mp3")

btn.addEventListener("click",()=>{
  if (inpuT.value=="") {
    k.play()
  }
  else {
    
  
let l = document.createElement("li")
//l.setAttribute("class","liClass")
l.innerHTML=inpuT.value
ul.append(l)
inpuT.value=""
save()
let cross=document.createElement("span")
cross.innerHTML="\u00d7"
//cross.setAttribute("style","margin-left:173px")
l.append(cross)
save()
}
})





const dlte=()=>{
  ul.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
      e.target.classList.toggle("check")
     // e.target.classList.toggle("liClass")
      save()
      
    }
    else if (e.target.tagName=="SPAN") {
      e.target.parentElement.remove()
      save()
    }
    save()
  })
}
dlte()

const save =()=>{
 localStorage.setItem("data",ul.innerHTML)
 
}
const show=()=>{
 ul.innerHTML=localStorage.getItem("data")
}



show()
/*const aud=()=>{
  ul.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
      console.log(e.classList)
}}
  
)}
*/

