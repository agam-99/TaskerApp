const chalk = require("chalk");
const figlet = require("figlet");
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">_>_>"
});
var arr = [];
var des = [];
var count = 0;
console.log(chalk.red(figlet.textSync("TASKER")));
reader.prompt();
reader.on("line", function (data) {
    var cmd = data.split(" ")[0];
    switch (cmd) {
        case "help": displayMenu();
            reader.prompt();
            break;
        case "ls": displayList();
            reader.prompt();
            break;
        case "add":
            var val = data.split(" ")[1];
            addList(val);
            var desc=data.slice(2);
            taskDesc(data);
            reader.prompt();
            break;
        case "delete":
            var val = data.split(" ")[1];
            deleteList(val);
            reader.prompt();
            break;
        default:
            console.log(chalk.red.inverse("wrong command"));
            reader.prompt();
    }
});
reader.prompt();
reader.on("close", function () {
    console.log(chalk.blue(figlet.textSync("EXIT")));
});
function displayMenu() {
    console.log(chalk.yellow("1. add task_name"));
    console.log(chalk.yellow("2. ls (to list all tasks)"));
    console.log(chalk.yellow("3. delete id (enter task id to delete it)"));
}
function displayList() {
    for (var i = 1; i < count + 1; i++) {
        console.log(chalk.yellow(i + "." + arr[i] +"  " +  des[i]));
    }
}
function addList(data) {
    arr[count + 1] = data;
    console.log(chalk.green("One Task Added"));
    count++;
}
function deleteList(data) {
    if (data > count) {
        console.log(chalk.red("no such id"));
        return;
    }
    arr.splice(data, 1);
    des.splice(data, 1);
    console.log(chalk.green("task deleted"));
    count--;

}
function taskDesc(data){
    des[count] = data;
    console.log(chalk.green(" Description added "));
}
