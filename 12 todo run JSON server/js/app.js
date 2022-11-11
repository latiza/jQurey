$(function () {
    //CRUD Application
//elemek összegyűjtögetése
    let form = $(".form");
    let inputTitle = $("#todoTitle");
    let inputDescription = $("#todoDescription");
    let list = $(".todo-list");
    let url = "http://localhost:3000";
//felvitt filmek betöltése
    function loadTodo() {

        $.ajax({
            method: "GET",
            url: url + "/todo",
            dataType: "json"
        }).done(function (response) {
            list.empty();
            insertTodo(response);

        })
            .fail(function (error) {
                console.log(error);
            })
    }
//meglévő filmek betöltése
    loadTodo();

//új film beszúrása a weboldalra
    function insertTodo(todos) {
        todos.forEach(function (e) {
            let li = $(`<li class="todo">
<div class="todo-content">
                <h3 class="todo-title">${e.title}</h3>
                <p class="todo-description">${e.description}</p>
            </div>
            <button class="btn-edit" data-id="${e.id}">Szerkesztés</button>
            <button class="btn-delete" data-id="${e.id}">Törlés a listából</button>
        </li>`);
            list.append(li);
        })
    }

//hozzáadás a json fájlhoz
    function addTodo(title, description) {
        let film = {
            "title": title,
            "description": description
        };
        $.ajax({
            method: "POST",
            url: url + "/todo",
            dataType: "json",
            data: film
        }).done(function (response) {
            loadTodo();
        })
            .fail(function (error) {
                console.log(error);
            })
    }

//az űrlap kiürítése a küldés után
    form.on("submit", function (e) {
        e.preventDefault();
        addTodo(inputTitle.val(), inputDescription.val());
        inputTitle.val("");
        inputDescription.val("");
    });

//Törlés a json fájlból
    function removeTodo(id) {
        $.ajax({
            method: "DELETE",
            url: url + "/todo/" + id,
            dataType: "json",
        }).done(function (response) {
            loadTodo();
        })
            .fail(function (error) {
                console.log(error);
            })

    }

    list.on("click", ".btn-delete", function () {
        let id = $(this).data("id");
        removeTodo(id);
    });

    function updateTodo(id, title, description) {

        let film = {
            "title": title,
            "description": description
        };
        $.ajax({
            method: "PATCH",
            url: url + "/todo/" + id,
            dataType: "json",
            data: film
        }).done(function (response) {
            loadTodo()

        })
            .fail(function (error) {
                console.log(error);
            });

    }
    list.on("click", ".btn-edit", function (e) {
        e.preventDefault();


        let titleToEdit = $(this).parent().find(".todo-title");
        let descriptionToEdit = $(this).parent().find(".todo-description");

        $(this).toggleClass("editable");

        if ($(this).hasClass("editable")) {
            let titleToEditText = titleToEdit.text();
            let descriptionToEditText = descriptionToEdit.text();


            titleToEdit.replaceWith(`<input type="text" class="todo-title" value="${titleToEditText}" />`);

            descriptionToEdit.replaceWith(`<input type="text" class="todo-description" value="${descriptionToEditText}" />`);

            $(this).text("szerkesztés kész");

        }
        else{
            let modId = $(this).data("id");
            let thisTitle = titleToEdit.val();
            let thisDesc= descriptionToEdit.val();

            titleToEdit.replaceWith(` <h3 class="todo-title">${thisTitle}</h3>`);
            descriptionToEdit.replaceWith(`<p class="todo-description">${thisDesc}</p>`);

            updateTodo(modId, thisTitle, thisDesc);
            $(this).text("szerkesztés");

        }

    });



});


