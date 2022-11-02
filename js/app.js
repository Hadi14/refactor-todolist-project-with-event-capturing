const todoform = document.getElementById("todo_form");
const bodydiv = document.getElementById("no_status");
const todoinput = document.getElementById("todo_input");
const addbtn = document.getElementById("add_btn");
const btn = document.querySelector('.btn');
const closebtn = document.querySelector('.close');
const statusbox = document.querySelectorAll('.status');
const modalbtn = document.getElementById('todo_submit');






addbtn.addEventListener('click', () => {
    todoform.style.top = "30%";
})


btn.addEventListener('click', () => {
    todoform.style.top = "-50%";
})

let count = 0;
modalbtn.addEventListener('click', () => {
    const newdiv = document.createElement('div');
    newdiv.classList.add('todo');
    newdiv.innerHTML = todoinput.value;
    newdiv.setAttribute("id", count++);

    const newclose = document.createElement('span');
    newclose.classList.add('close');
    newclose.innerHTML = "&times;";

    newdiv.append(newclose);
    bodydiv.append(newdiv);
    newdiv.draggable = true;
    newclose.addEventListener('click', () => {
        newdiv.remove();
    })

    newdiv.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData("todoid", event.target.id);
        // console.log(event.target.id);
    })
})

statusbox.forEach(element => {
    element.addEventListener('dragover', (event) => {
        event.preventDefault();
        // console.log("Drag Over");
    })
    element.addEventListener('drop', (event) => {
        element.append(document.getElementById(event.dataTransfer.getData('todoid')));
        // let tid = event.dataTransfer.getData('todoid');
        // let telem = document.getElementById(tid);
        // event.target.append(telem);
        // console.log(event);
        // element.append(telem);
    })
});
