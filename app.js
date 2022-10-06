//code that communicates to the mongodb server

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Employees = require('./models/models');
const { where } = require('./models/models');

//function that connects to the database collection
function mongoDbConnector ()
{
    mongoose.connect("/* add your mongodb file link here... */", (err) => {
        if (err) throw err;
        else console.log("Connection valid");
    });
}

app.use(express.json());

app.post('/signup', (req, res) =>
{
    //sign up endpoint gets username and password from the body of the request
    const username = req.body.username;
    const password = req.body.password;

    mongoDbConnector();

    //creates new document using the mongoose model
    Employees.create({
        name: username,
        password: password,
        manager: false,
        admin: false
    }, (err) => {
        if (err) throw err;
        else res.send(`New user ${username} is added to database`);
    })
})

app.post('/login', (req, res) =>
{
    //login endpoint
    const usr = req.body.username;
    const pwd = req.body.password;

    mongoDbConnector();
    
    Employees.findOne({ name:usr, password: pwd }).exec((err, docs) =>
    {
        //searches database using the database and password
        if (err) console.error(err);

        if (!docs)
        //if no data is returned the response below is sent to the frontend
        {
            res.send({'msg': 'Username or password is invalid!'});
        }
        else
        {
            //if data is found a payload is sent to the frontend headers
            payload = {
                "name": docs.name,
                "roles": docs.roles,
                "manager": docs.manager,
                "admin": docs.admin
            }
            let token = jwt.sign(JSON.stringify(payload), 'emp-auth', {algorithm: 'HS256'});
            //jwt token is created 

            let data = { payload, 'token': token };
            res.send(data);
        }
    })
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
    const username = req.body.usr;
    const newusername = req.body.newusr;

    mongoDbConnector();

    //if user has access to manager resource they can execute the following endpoint
    Employees.updateOne({name: username}, {name: newusername}, (err, docs) =>
    {
        //user credential is updated, but only the username is changed for security reasons
        if (err) throw err;

        if (!docs)
        {
            res.send({ 'msg': `${username} does not exist!` });
        }
        else
        {
            res.send({ 'msg': 'Record updated!' });
        }
    })
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

    let usr = req.body.name;

    mongoDbConnector();
    
    //all data passed from the body, which is already modelled after the employees model is pushed to the database with the username as the only condition
    Employees.updateOne({ roles: req.body.arr }).where({ name: usr }).exec((err, docs) =>
    {
        if (err) throw err;

        //if no document is modified than the username entered is incorrect
        if (docs.modifiedCount === 0)
        {
            //if the username entered is not in the database, the code below is executed
            console.log({'msg': 'Record could not be found/updated. Check that correct data is added and try again! (Case sensitive)'});
        }
        else
        {
            console.log({'msg': 'Record updated'});
        }
    })
});


app.post('/delete-div', (req, res) =>
//endpoint to delete a division is the record
{
    const usr = req.body.username;
    const div = req.body.div;
    const ou = req.body.ou;

    mongoDbConnector();

    //update employees based on the ou and username entered, than pull the specific div sent by user
    Employees.updateOne({ $or: [{ name: usr, 'roles.ou': ou }] }, { $pull: { 'roles.$[].divisions': div } }).exec((err, docs) =>
    {
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            //if no modification was done in the database, than the data entered by user was incorrect and the code below is executed
            res.send({'msg': "Record not updated/not found. Check that correct data is added and try again. (Case-sensitive)"});
        }
        else
        {
            res.send({'msg': "Record updated"});
        }
    })
})

app.post('/delete-ou', (req, res) =>
//function to delete and ou
{
    const usr = req.body.username;
    const ou = req.body.ou;

    mongoDbConnector();

    //deletes ou with the username as the condition
    Employees.updateOne({ 'name': usr }, { $pull: { roles: { ou: `${ou}` } } }).exec((err, docs) =>
    {
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            res.send({'msg': 'Data entered did not match any records!'});
        }
        else
        {
            res.send({'msg': 'Record updated'});
        }
    })
})

app.post('/add-div', (req, res) =>
{
    const usr = req.body.username;
    const ou = req.body.ou;
    const div = req.body.divisions;
    
    mongoDbConnector();

    //updates employees model using ou and name as a condition and pushes the div entered by user into the collection
    Employees.updateOne({ $or: [{ 'roles.ou': ou, 'name': usr }] }, { $push: { 'roles.$[].divisions': div } }).exec((err, docs) =>
    {
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            res.send({ 'msg': 'Record could not be found/updated. Check if information entered is correct and try again!' });
        }
        else
        {
            res.send({ 'msg': 'Record updated!' });
        }
    })
})

app.post('/add-ou', (req, res) =>
{
    const usr = req.body.username;
    const ou = req.body.ou;

    mongoDbConnector();
    Employees.updateOne({ 'name': usr }, { $push: { roles: { ou: `${ou}` } } }).exec((err, docs) =>
    //code to add an ou into the database using the username entered as condition
    {
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            res.send({'msg': 'Data did not match any of our records!'});
        }
        else
        {
            res.send({'msg': 'Record updated!'});
        }
    })
})

app.post('/adminchange', (req, res) =>
{
    const usr = req.body.username;
    const admin = req.body.admin;

    mongoDbConnector();

    Employees.updateOne({ 'name': usr }, { admin: admin }).exec((err, docs) =>
    //if user has admin rights acccess, they may change an users admin status as either 'true' or 'false'
    {
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            res.send({'msg': 'Data entered did not match any records!'});
        }
        else
        {
            res.send({'msg': `${usr} can now access admin resources!`});
        }
    })
})

app.post('/managerchange', (req, res) =>
{
    const usr = req.body.username;
    const manager = req.body.manager;

    mongoDbConnector();

    Employees.updateOne({ 'name': usr }, { manager: manager }).exec((err, docs) =>
    //if user has admin rights, they may change users manager status as either 'true' or 'false' based on the username entered
    {
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            res.send({'msg': 'Data entered did not match any records!'});
        }
        else
        {
            res.send({'msg': `${usr} can now access manager resources!`});
        }
    })
})

app.post('/divisioncreds', (req, res) =>
{
    //this is a manager or admin rights endpoint - only visible to admins and managers
    const div = req.body.division;

    mongoDbConnector();

    Employees.find({ 'roles.divisions': div }, 'name').exec((err, docs) =>
    {
        if (err) throw err;

        if (docs.length === 0)
        {
            res.send({'msg': `Record not found with ${div}!`})
        }
        else
        {
            //if division is found, the name of the user in that division is returned to the frontend
            res.send({'msg': `${docs}`});
        }
    })
})

app.listen(8080, () => 
{
    console.log("Server started!");
})
