let tasks=JSON.parse(window.localStorage.tasks);
let type;
let allTypes=document.getElementById("allType").children;
    for(let i=0 ; i<allTypes.length ; i++) {
        allTypes[i].onclick = (event) => {
            type=event.target.innerText;
        }
    }
    document.getElementById("create-task").onclick = (event) => {
    let text=document.getElementById("task-name").value;
    let textTitle=document.getElementById("description").value;
    let timeStart=document.getElementById("time").value;
    function createTask(text,textTitle,type,timeStart) {
        this.text=text;
        this.textTitle=textTitle;
        this.type=type;
        this.time=function() {
            let time=+this.textTitle.split(" ")[0];
            return time / 30 ;
        };
        this.timeStart=timeStart;
    }
    tasks.push(new createTask(text , textTitle , type , timeStart))
    localStorage.setItem("tasks",JSON.stringify(tasks));
    console.log(JSON.parse(window.localStorage.tasks))
    document.getElementById("task-name").value="";
    document.getElementById("description").value="";
    document.getElementById("task-created").style.display="flex";
    setTimeout(function() {
        document.getElementById("task-created").style.display="";
    },1500)
}
setInterval(function() {
    let taskNameValue=document.getElementById("task-name").value;
    let descriptionValue=document.getElementById("description").value;
    if(!taskNameValue || !descriptionValue) {
        document.getElementById("create-task").innerText="please fill boxes"
        document.getElementById("create-task").setAttribute("disabled",true)
    } else {
        document.getElementById("create-task").innerText="create task";
        document.getElementById("create-task").removeAttribute("disabled");
    }
},100)