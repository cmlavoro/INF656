

// Import Fs module
const { readFile, writeFile } = require("fs");

function getAllTasks()
{
    readFile("tasks.json", "utf-8", (err, content) => {
        if (err) throw err;
        var array = JSON.parse(content);
        console.log(array);
    });
}

const listTasks = () => getAllTasks(); 

function addTask(title, description) 
{
    readFile("tasks.json", "utf-8", (err, content) => {
        if (err) throw err;

        var array = JSON.parse(content);

        var jsonArray = [];

        for (i in array) {
            jsonArray.push(array[i]);
        }

        jsonArray.push({"Title": `${title}`, "Description": `${description}`, "Status": "Not started"}); 

        writeFile("tasks.json", JSON.stringify(jsonArray), "utf-8", function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
    });
}

function completeTask(title)
{
    readFile("tasks.json", "utf-8", (err, content) => {
        if (err) throw err;

        var array = JSON.parse(content);

        var jsonArray = [];

        for (i in array) {

           var item = array[i];

           var itemTitle = item['Title'];
           var itemDescription = item['Description'];

           if(itemTitle != title)
           {
             jsonArray.push(array[i]);
           }
           else
           {
            jsonArray.push({"Title": `${itemTitle}`, "Description": `${itemDescription}`, "Status": "Complete"}); 
           }

        }

        writeFile("tasks.json", JSON.stringify(jsonArray), "utf-8", function(err){
            if (err) throw err;
            console.log('The "data to update" was update to file!');
          });

    });
}

//addTask("Teeth", "Brush teeth before bedtime.");
//addTask("Dishes", "Wash dishes in the sink.");
//completeTask('Vacuum');


const readline = require('readline');

const rl = readline.createInterface(
		process.stdin, process.stdout);

let menu = '\nPlease enter a choice: \n(1) List all tasks\n(2) Add a new bowling task\n(3) Add a new shopping task\n(4) Add a new sleeping task\n(5) Mark the Vaccum task as completed\n(6) Mark the Teeth task as completed\n';

var choiceMade = "";

rl.setPrompt(menu);
rl.prompt();
rl.on('line', (choice) => {

    switch(choice) {
        case "1":
            listTasks();
            break;
        case "2":
            addTask("Bowling", "Go bowling with friends.");
            break;
        case "3":
            addTask("Shopping", "Go food shopping");
          break;
        case "4":
            addTask("Sleeping", "Go to sleep");
          break;
        case "5":
            completeTask('Vacuum');
          break;
        case "6":
            completeTask('Teeth');
          break;
        default:
            console.log(`Invalid selection!`);
      }
	rl.close();
});