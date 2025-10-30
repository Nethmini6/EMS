
/* data set for get API

const users = [
    {
        id: 1,
        name: 'Amal',
    },
    {
        id: 2,
        name: 'Nimal',
    },
]; */

const { response } = require('express');
const Employee = require('./model');




/* function to return data set*/

/*get all users*/
const getEmployees = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            console.error("❌ getUsers Error:", error);
            res.json({error});
        });
};

const addEmployee = (req, res, next) => {
    const employee = new Employee({
        id: req.body.id,
        name: req.body.name,
    });
    employee.save()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}

const updateEmployee = (req, res, next) => {
    const { id, name } = req.body;  
    Employee.updateOne({ id: id }, { $set: { name: name }})
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}

const deleteEmployee = (req, res, next) => {
    const id = req.body.id;
    Employee.deleteOne({id: id})
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}

exports.getEmployees = getEmployees;
exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
