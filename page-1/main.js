let preTasks =localStorage.getItem("tasks");
let tasks=JSON.parse(preTasks);
setInterval(function() {
    preTasks =localStorage.getItem("tasks");
    tasks=JSON.parse(preTasks);
},100)
console.log(tasks)
for(let i=0;i<tasks.length;i++) {
    let divParent=document.createElement("div");
    divParent.classList.add(`task` , "task-box");
    let divText=document.createElement("div");
    divParent.prepend(divText);
    let text=document.createElement("p")
    text.classList.add("text");
    text.innerText=tasks[i].text;
    divText.append(text);
    let textTitle=document.createElement("p")
    textTitle.classList.add("text-title");
    textTitle.innerText=tasks[i].textTitle;
    divText.append(textTitle);
    let bullet=document.createElement("div");
    bullet.classList.add(`${tasks[i].type}-bullet`)
    divParent.append(bullet);
    document.getElementById("watch-section").append(divParent);
    divParent.style.top=`${((tasks[i].timeStart - 8) * 2 * 60) + 51}px`;
    divParent.style.height=`${(tasks[i].time) * 60}px`
}