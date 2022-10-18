//code that communicates to the mongodb server

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Employees = require('./models/models');
const controller = require('./controllers/log.controller');

//function that connects to the database collection
function mongoDbConnector ()
{
    mongoose.connect("mongodb+srv://siya:daboss@cluster0.syorgvs.mongodb.net/finalTask?retryWrites=true&w=majority", (err) => {
        if (err) throw err;
        else console.log("Connection valid");
    });
}

app.use(express.json());

app.post('/signup', (req, res) =>
{
    //sign up endpoint

    mongoDbConnector();
    controller.create(req, res);

})

app.post('/login', (req, res) =>
{
    //login endpoint

    mongoDbConnector();
    controller.login(req, res);

})

app.post('/authcred', (req, res) =>
{
    //code to authenticate the users access to manager resources
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'emp-auth');
        //token is taken and checked if they admin or manager boolean is true
        if (decoded.manager || decoded.admin)
        {
            res.send({'msg': `Welcome ${decoded.name}`});
        }
        else
        {
            res.status(401).send({'msg': `Sorry ${decoded.name}, you cannot access this content!`});
        }
    } catch (err) {
        res.status(403).send({"msg": "Error caught!"});
    }
})

app.post('/update', (req, res) =>
{
    //function to update a user credential

    mongoDbConnector();
    controller.updateUsername(req, res);

})

app.post('/authadmin', (req, res) => 
{
    //endpoint to authenticate the user admin access
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'emp-auth');
        //after user token is decoded, the admin status is checked and if true/false one of the codes below is executed
        if (decoded.admin)
        {
            res.send({'msg': `Welcome ${decoded.name}`});
        }
        else
        {
            res.status(401).send({'msg': 'You do not have access to this resource'});
        }
    } catch (err) {
        res.status(403).send({'msg': 'Error detected'});
    }
})

app.post('/addroles', (req, res) =>
{
    //add roles to an empty roles document

    mongoDbConnector();
    controller.updateRoles(req, res);

});


app.post('/delete-div', (req, res) =>
//endpoint to delete a division is the record
{

    mongoDbConnector();
    controller.deleteDivision(req, res);

})

app.post('/delete-ou', (req, res) =>
//function to delete and ou
{

    mongoDbConnector();
    controller.deleteOu(req, res);

})

app.post('/add-div', (req, res) =>
{
    
    mongoDbConnector();
    controller.addDivision(req, res);

})

app.post('/add-ou', (req, res) =>
{

    mongoDbConnector();
    controller.addOu(req, res);

})

app.post('/adminchange', (req, res) =>
{

    mongoDbConnector();
    controller.updateAdmin(req, res);

})

app.post('/managerchange', (req, res) =>
{

    mongoDbConnector();
    controller.managerUpdate(req, res);

})

app.post('/divisioncreds', (req, res) =>
{
    //this is a manager or admin rights endpoint - only visible to admins and managers

    mongoDbConnector();
    controller.divisionsCredentials(req, res);

})

app.listen(8080, () => 
{
    console.log("Server started!");
})