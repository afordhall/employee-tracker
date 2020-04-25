const mysql = require("mysql");
const inquirer = require("inquirer");
// const express = require ("express");

const PORT = process.env.PORT || 3000;
// const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "",
    database: "employee_db" 
});


// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourRootPassword

connection.connect((err) =>{
    if (err) {
        throw err
    } 

    askQuestion()

});

function  askQuestion () {
    inquirer
        .prompt({
            name: "action",
            type: "list", 
            message: "Choose from the following", 
            options: [
                "view employees",
                "view departments",
                "view roles", 
                "add employee",
                "delete employee",                   
            ]

        })
        .then((answer) => {
            switch (answer.action) {
               
                case "view employee":
                    viewEmployee();
                    break;
    
                case "view departemnt":
                    viewDepartment();
                    break;
    
                case "view role":
                    viewRole();
                    break;
               
                case "add employee":
                    addEmployee();
                    break;

                case "delete employee":
                    deleteEmployee();
                    break;
            }
        })

};


function viewEmployee() {
    connection.query("select * FROM employee", function(err, res){
        if (err) throw err
        console.log(res);

    })
}


function viewDepartment() {
    connection.query("select * from department", function (err,res){
        let departmentOptions = res.map(function (department){
            return {name: department.name, value: department.id}
        })
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "departmentOptions",
                    message: "Choose Department", 
                    choices: departmentOptions
                })
                .then(function(userChoise) {

                })
                {
                    name: "lastName",
                    type: "input",
                    message: "Enter employee's last name"
                },
                {
                    name: "employeeRole",
                    tyoe: "list", 
                    message: "Enter role", 
                }
            ])
            // .then((firstNmae, lastName, employeeRole))
    })
}


app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost${PORT}`);
});

