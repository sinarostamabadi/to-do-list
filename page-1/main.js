let preTasks =localStorage.getItem("tasks");
let tasks=JSON.parse(preTasks);
console.log(tasks);
let taskLeftCount=0;
tasks.forEach(function(element) {
    if (element.done!=="true") {
        taskLeftCount++;
    }
})
document.getElementById("task-left-count").innerText=taskLeftCount;
let workTaskCount=0;
tasks.forEach(function(element) {
    if (element.type==="work") {
        workTaskCount++;
    }
})
document.getElementById("work-task-count").innerText=workTaskCount;
let personalTaskCount=0;
tasks.forEach(function(element) {
    if (element.type==="personal") {
        personalTaskCount++;
    }
})
document.getElementById("personal-task-count").innerText=personalTaskCount;
let shoppingTaskCount=0;
tasks.forEach(function(element) {
    if (element.type==="shopping") {
        shoppingTaskCount++;
    }
})
document.getElementById("shopping-task-count").innerText=shoppingTaskCount;
let healthTaskCount=0;
tasks.forEach(function(element) {
    if (element.type==="health") {
        healthTaskCount++;
    }
})
document.getElementById("health-task-count").innerText=healthTaskCount;
setInterval(function() {
    preTasks =localStorage.getItem("tasks");
    tasks=JSON.parse(preTasks);
},100)
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
    if (tasks[i].done==="true") {
        divParent.classList.add("done-task")
        divParent.style.backgroundColor="#00abfd";
        divParent.firstElementChild.firstElementChild.style.color="white";
        divParent.firstElementChild.lastElementChild.style.color="white";
        let doneElement=document.createElement("div");
        doneElement.innerText="done ✔";
        doneElement.classList.add("done");
        divParent.append(doneElement);
    }
}
document.getElementById("task-count").innerText=`${tasks.length}`;
document.getElementById("task-created-count").innerText=`${tasks.length}`;
let taskOnclick=(event) => {
    event.target.classList.add("done");
    event.target.style.backgroundColor="#00abfd";
    event.target.firstElementChild.style.color="white";
    event.target.firstElementChild.lastElementChild.style.color="white";
    let done=document.createElement("div");
    done.innerText="done ✔";
    done.classList.add("done");
    event.target.append(done);
    let preCurrentText=event.target.firstElementChild.firstElementChild.innerText;
    let currentText=preCurrentText.toLowerCase();
    tasks.forEach(function(element) {
        if (element.text === currentText) {
            element.done="true";
        }
        window.location.reload();
    })
    window.localStorage.setItem("tasks",JSON.stringify(tasks));
}
document.querySelectorAll(".task:not(.done-task)").forEach(function(element) {
    element.onclick=taskOnclick;
})
document.querySelectorAll(".task").forEach(function(element) {

})