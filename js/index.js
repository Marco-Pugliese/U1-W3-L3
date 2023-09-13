const addBtn = document.getElementById("addMe");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const textAreaContent = document.getElementById("toDo");
  const newToDo = document.createElement("div");
  newToDo.innerHTML = `<div class="newToDo"><button onclick="lineIt(event)" id="lined"><i id="doneIt" class="fas fa-frog"></i></button>${textAreaContent.value}<button onclick="deleteIt(event)" id="deleted"><i id="deleteIt" class="fas fa-frog"></i></button>`;
  document.getElementById("list").append(newToDo);
  textAreaContent.value = "";
});

const deleteIt = (e) => {
  const target = e.target.parentElement;
  target.parentElement.remove();
};
const lineIt = (e) => {
  const target = e.target;
  target.parentElement.parentElement.classList.toggle("lined");
  target.classList.toggle("greenAgain");
};
