const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require ("express");

const PORT = process.env.PORT || 3000;
const app = expres();

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

    askQuestion();

});

function  askQuestion () {
    inquirer
        .prompt({
            name: "action",
            type: "list", 
            message: "Choose from the following", 
            options: [
                "add employee", 
                "add department", 
                "add role", 
                "view employees",
                "view departments",
                "view roles", 
            ]
        })
        .then((answer) => {
            switch (answer.action) {
                case "add employee":
                    AddEmployee();
                    break;

                case "add departemnt":
                    AddDepartment();
                    break;

                case "add role":
                    AddRole();
                    break;

                case "view employee":
                    VeiwEmployee();
                    break;
    
                case "view departemnt":
                    ViewDepartment();
                    break;
    
                case "view role":
                    ViewRole();
                    break;
            

            }
        })

};


function AddEmployee() {
    connection.query("SELECT * FROM role", function(err, result){
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "Enter employee's first name"
                },
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
    })
}


app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost${PORT}`);
})