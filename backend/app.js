/* this is express application using express*/

const express=require("express");
const app = express();
const cors=require("cors");
const controller = require('./controller');

app.use(cors()); /*middleware*/

app.use(                      
    express.urlencoded({        /*middleware*/
        extended: true,
    })
 );

app.use(express.json()); /*middleware*/


/*create rest API*/
app.get('/employees', (req, res) => {
    controller.getEmployees((req, res, next) => {
        res.send();
    });
});

app.post('/createemployee', (req, res) => {
    controller.addEmployee(req.body, (callback) => {
        res.send();
    });
});

app.post('/updateemployee', (req, res) => {
    controller.updateEmployee(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteemployee', (req, res) => {
    controller.deleteEmployee(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;