let tasks=JSON.parse(localStorage.getItem("tasks"));
console.log(tasks)
for(let i=0;i<tasks.length;i++) {
    let divParent=document.createElement("div");
    divParent.classList.add("task");
    divParent.setAttribute("id",`${i}`)
    let left=document.createElement("div");
    left.classList.add("left");
    let img=document.createElement("img");
    img.classList.add("edit-bar");
    img.setAttribute("src","https://s2.filedn.ir/www.skyroom.online/8615/188247c0-6144-4b1a-a0bd-c01ce1b27cd0/9688646905.png")
    left.prepend(img)
    let innerLeft=document.createElement("div");
    innerLeft.classList.add("inner-left")
    let text=document.createElement("p");
    text.classList.add("title")
    text.innerText=tasks[i].text;
    innerLeft.append(text);
    let textTitle=document.createElement("p");
    textTitle.classList.add("text")
    textTitle.innerText=tasks[i].textTitle;
    innerLeft.append(textTitle);
    left.append(innerLeft);
    divParent.append(left);
    let right=document.createElement("div");
    right.classList.add("right")
    let bullet=document.createElement("div");
    bullet.classList.add("bullet",`${tasks[i].type}`)
    right.append(bullet);
    divParent.append(right);
    document.getElementById("task-list").append(divParent)
}
let editBarOnclick=(event) => {
    event.target.style.display="none";
    event.target.closest(".task").style.backgroundColor="#ffd1df";
    event.target.nextElementSibling.firstElementChild.style.color="#ff0064";
    event.target.nextElementSibling.lastElementChild.style.color="#ff1d75";
    event.target.closest(".left").nextElementSibling.firstElementChild.style.display="none";
    let trashBox=document.createElement("div");
    trashBox.classList.add("trash")
    trashBox.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    event.target.closest(".left").nextElementSibling.prepend(trashBox);
    let cancel=document.createElement("div");
    cancel.classList.add("cancel");
    cancel.innerHTML='<i class="fa-solid fa-xmark"></i>';
    event.target.closest(".left").nextElementSibling.append(cancel);
    event.target.closest(".task").lastElementChild.style.display="";
    cancel.onclick=(event) => {
        event.target.closest(".task").style="";
        event.target.closest(".task").firstElementChild.firstElementChild.style="";
        event.target.closest(".task").firstElementChild.lastElementChild.firstElementChild.style="";
        event.target.closest(".task").firstElementChild.lastElementChild.lastElementChild.style="";
        event.target.closest(".right").style.display="none";
    }
    trashBox.onclick = () => {
        let taskId=trashBox.closest(".task").getAttribute("id");
        tasks.forEach(function(element,index) {
            if (+taskId === element.taskNumber) {
                tasks.splice(index,1)
            }
        })
        window.localStorage.setItem("tasks",JSON.stringify(tasks));
        trashBox.closest(".task").remove();
    }
};
document.querySelectorAll("img").forEach(function(element) {
    element.addEventListener("click",editBarOnclick)
})
document.getElementById("search").onclick= (event) => {
    event.target.nextElementSibling.style.display="none";
    event.target.closest(".header").lastElementChild.style.display="flex";
}
document.getElementById("multiply").onclick = (event) => {
    event.target.closest(".input-box").style.display="";
    document.getElementById("angle").style.display="";
}