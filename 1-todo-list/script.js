function todoList(todos) {
  const content =document.querySelector("#content")
  const ul = document.createElement("ul")

  const lineThrough= (e)=>{
    const li = e.target;
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none"
    }else{
      li.style.textDecoration = "line-through"
    }
  }
  todos.forEach(item => {
    const li = document.createElement("li")
    li.innerText = item.todo;
    li.addEventListener("click",lineThrough)
    ul.appendChild(li)
  })
  content.appendChild(ul)
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);