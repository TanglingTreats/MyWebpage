window.setTimeout(function () {

    var todos = [];
    var input = "";
    
    while(input != "quit")
    {
        var input = prompt("What would you like to do?");

        if (input == "list") {
            console.log(todos);
        }
        else if (input == "new") {
            var newToDo = prompt("Enter new todo");
        
            todos.push(newToDo);
        }
    }

    console.log("Quit the app");

}, 500);