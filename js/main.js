
let lis = document.querySelectorAll(".link li")

lis.forEach((li) => {
  li.onclick = function(){
    for( let i = 0; i < lis.length; i++){
        lis[i].classList.remove("chiked")
     }
   li.classList.add("chiked")
  }
})

document.querySelector(".custom .main span").onclick = function(){
    document.querySelector(".custom .main span").classList.add("chiked") 
}
