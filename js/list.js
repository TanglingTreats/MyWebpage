window.setTimeout(function () {

    var todos = [];
    var input = "";
    
    while(input != "quit")
    {
        var input = prompt("What would you like to do?");

        //If user enter "list", print out the Todos
        if (input === "list") {
            //Check if list is empty
            if (todos.length == 0)
            {
                console.log("Your Todo list is empty!");
            }
            else {
                listToDo();
            }
        }
        //If user enters "new", add new Todo
        else if (input === "new") {
            newTodo();
        }
        //If user enters "delete", delete specific Todo
        else if (input === "delete") {
            
            deleteToDo();
        }
    }

    console.log("Quit the app");

    function listToDo() {
        console.log("**********");
            todos.forEach(function(todo, index) {
                console.log(index + ": " + todo);
            });
        console.log("**********");
    }

    function newTodo() {
        var newToDo = prompt("Enter new todo");
        
        todos.push(newToDo);
    }

    function deleteToDo() {
        var index = prompt("Enter index of todo to delete");
        
        console.log("Deleted: " + todos[index]);
        todos.splice(index, 1);
    }

}, 500);