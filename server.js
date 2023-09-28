// Import Fs module
const { readFile, writeFile } = require("fs");

function getAllTasks()
{
    readFile("tasks.json", (err, content) => {
        if (err) throw err;
        var array = JSON.parse(content);
        console.log(array);
    });
}

const listTasks = () => getAllTasks(); 

listTasks();

function addTask(title, description) 
{
    // readFile("tasks.json", (err, content) => {
    //     if (err) throw err;

    //     var json = [];
    //     json = JSON.parse(content);

    //     json.push('Title: ' + title, 'Description: ' + description, 'Status: Not started');   

    //     writeFile("tasks.json", JSON.stringify(json), function(err){
    //       if (err) throw err;
    //       console.log('The "data to append" was appended to file!');
    //     });
    // });
}

addTask("Exercise", "Lift weights and go running.");