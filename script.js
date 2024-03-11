var overlay=document.querySelector(".overlay")
var popupdet=document.querySelector(".popup-details")
var addpop=document.getElementById("add-pop")

addpop.addEventListener("click",function(){
    popupdet.style.display="block"
    overlay.style.display="block"
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(){
    popupdet.style.display="none"
    overlay.style.display="none"
})

var container=document.querySelector(".container")
var booktit=document.getElementById("book-title")
var author=document.getElementById("author-name")
var des =document.getElementById("short-des")
var addbutton=document.getElementById("add-book")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-details")
    div.innerHTML=`<h2>${booktit.value}</h2>
    <h5>${author.value}</h5>
    <p>${des.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupdet.style.display="none"
    overlay.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove()

}