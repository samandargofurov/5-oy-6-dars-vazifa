import { getData, validate, createRow } from "./function.js";

const name = document.getElementById("name");
const button = document.getElementById("button");
const tbody = document.getElementById("tbody");
const form = document.getElementById("form");

button && button.addEventListener("click", function (e) {
    e.preventDefault();
    let isValid = validate(name);

    if (isValid) {
      let todo = {
        name: name.value,
        status: "todo",
        id: Date.now(),
      };

      let todos = getData();
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      form.reset();

      let tr = createRow(todo, todos.length);
      tbody.innerHTML += tr;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  let todos = getData();
  if (todos.length) {
    todos.forEach((todo, index) => {
      let tr = createRow(todo, index + 1);
      tbody.innerHTML += tr;
    });
  }

  const deleteButton = document.querySelectorAll("i.fa-trash-can");
  if (deleteButton.length) {
    deleteButton.forEach((del) => {
        del && del.addEventListener('click', function(e) {
            e.preventDefault();
            let isDelete = confirm('Rostdan ham ochirmoqchimisiz?')

            let id = this.getAttribute('data-id');
            if (isDelete && id) {
                todos = todos.filter(todo => {
                    return todo.id != id;
                });

                localStorage.setItem('todos', JSON.stringify(todos));
                window.location.reload();
            }
        })
    })
  }

});

const newButton = document.querySelectorAll("button.btn1");
if (newButton.length) {
  newButton.forEach((instead) => {
      instead && instead.addEventListener('click', function(e) {
          e.preventDefault();

          let id = this.getAttribute('data-id');
          if (id) {
              todos = todos.filter(todo => {
                
              });

              window.location.reload();
          }
      })
  })
}