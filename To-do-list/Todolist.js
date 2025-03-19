let input = document.getElementById("inputTask");
 const task =document.getElementById("taskList")
 const button = document.getElementById("btn");
 button.addEventListener("click",()=>{
    if(input.value === ""){
        alert("enter inputTask");
    }else{
        const createList =document.createElement("li")
        createList.innerText=input.value;
        task.appendChild(createList);

        let tasklist=document.createElement("span")
        tasklist.innerText="delete";
       createList.appendChild(tasklist)

       tasklist.addEventListener("click",()=>{
        task.removeChild(createList)
       })
    }

 })