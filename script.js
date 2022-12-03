const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}

const textarea = document.getElementById("textarea");
const add = document.getElementById("add");
const lower = document.getElementById("lower");

const print = () => {
  let ar = [];
  if (localStorage.getItem("todo") === null) {
    localStorage.setItem("todo", "[]");
  } else {
    ar = JSON.parse(localStorage.getItem("todo"));
  }

  let str = "";
  ar.forEach((elem, index) => {
    str += `
    <div class="box" id="box">
      <div class="text">${elem}</div>
      <button class="del" onclick="delTodo(${index})">❌</button>
    </div>
    `;
  });
  lower.innerHTML = str;
};

const addTodo = () => {
  if (textarea.value !== null && textarea.value !== "") {
    let ar =
      localStorage.getItem("todo") != null
        ? JSON.parse(localStorage.getItem("todo"))
        : [];
    ar.push(textarea.value);
    localStorage.setItem("todo", JSON.stringify(ar));
    textarea.value = "";
    textarea.style.height = "30px";
    print();
  }
};

const delTodo = (index) => {
  let ar = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  ar.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(ar));
  print();
};

add.onclick = () => addTodo();
window.onload = () => print();
