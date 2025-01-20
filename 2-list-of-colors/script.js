function listOfColours(colours) {
 const content = document.querySelector("#content")
 const select = document.createElement("select")
 const para = document.createElement("p")
 const firstColor = colours[0]
 para.innerText = `you have selected: ${firstColor}`
 para.style.color = firstColor
 colours.forEach(color =>{
  const option = document.createElement("option")
  option.value = color
  option.innerText = color
  select.appendChild(option)
 })
 select.addEventListener("change",(e)=>{
  const selectColor = e.target.value;
  para.innerText = `you have selected: ${selectColor}`
  para.style.color = selectColor
 })
 content.appendChild(select)
 content.appendChild(para)
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
