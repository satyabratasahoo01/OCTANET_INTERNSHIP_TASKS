
window.addEventListener('load',()=>{
    const form=document.querySelector("#task-form");
    const input=document.querySelector("#task-input");
    const list_elements=document.querySelector("#tasks");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        const task=input.value;
        console.log(task)
        if(!task){
            alert("Please enter the task");
            return;
        }

        const task_Ele=document.createElement("div");
        task_Ele.classList.add("task");

        const task_content_Ele=document.createElement("div");
        task_content_Ele.classList.add("content");


        task_Ele.appendChild(task_content_Ele);

        const task_input_ele=document.createElement("input");
        task_input_ele.classList.add("text");
        task_input_ele.type="text";
        task_input_ele.value=task;
        task_input_ele.setAttribute("readonly","readonly");

        task_content_Ele.appendChild(task_input_ele);

        const task_action_ele=document.createElement("button");
        task_action_ele.classList.add("actions")

        const task_edit_ele=document.createElement("button");
        task_edit_ele.classList.add("edit-btn");
         task_edit_ele.innerHTML="Edit";


         const task_delete_ele=document.createElement("button");
         task_delete_ele.classList.add("delete-btn");
          task_delete_ele.innerHTML="Delete";

          task_action_ele.appendChild(task_edit_ele)
          task_action_ele.appendChild(task_delete_ele)

          task_Ele.appendChild(task_action_ele)

        list_elements.appendChild(task_Ele);
        input.value="";

        task_edit_ele.addEventListener("click",()=>{
            // task_input_ele.removeAttribute("readonly");
            // task_input_ele.focus();
            // task_edit_ele.innerHTML="save"
            if(task_edit_ele.innerHTML.toLowerCase()=="edit"){
                    task_input_ele.removeAttribute("readonly");
                    task_input_ele.focus();
                    task_edit_ele.innerHTML="save"
            }
            else{
               task_input_ele.setAttribute("readonly", "readonly");
               task_edit_ele.innerText="Edit";
            }

        });

        task_delete_ele.addEventListener("click",()=>{
            list_elements.removeChild(task_Ele)
        });
    });
});
