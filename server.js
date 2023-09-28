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

listTasks();

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

//addTask("Teeth", "Brush teeth before bedtime.");

addTask("Dishes", "Wash dishes in the sink.");