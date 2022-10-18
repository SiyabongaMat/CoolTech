const Employees = require('../models/models');
const jwt = require('jsonwebtoken');

exports.create = (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;

    //creates new document using the mongoose model and data from request body
    Employees.create({
        name: username,
        password: password,
        manager: false,
        admin: false
    }, (err) => {
        if (err) throw err;
        else res.send(`New user ${username} is added to database`);
    })
}

exports.login = (req, res) =>
{
    const usr = req.body.username;
    const pwd = req.body.password;

    Employees.findOne({ name: usr, password: pwd }).exec((err, docs) =>
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
}

exports.updateUsername = (req, res) =>
{
    const username = req.body.usr;
    const newusername = req.body.newusr;

    //if user has access to manager resource they can execute the following endpoint
    Employees.updateOne({name: username}, {name: newusername}, (err, docs) =>
    {
        //user credential is updated, but only the username is changed for security reasons
        if (err) throw err;

        if (docs.modifiedCount === 0)
        {
            res.send({ 'msg': `${username} does not exist!` });
        }
        else
        {
            res.send({ 'msg': 'Record updated!' });
        }
    })
}

exports.updateRoles = (req, res) =>
{
    let usr = req.body.name;

    //all data passed from the body, which is already modelled after the employees model is pushed to the database with the username as the only condition
    Employees.updateOne({ roles: req.body.arr }).where({ name: usr }).exec((err, docs) =>
    {
        if (err) throw err;

        //if no document is modified than the username entered is incorrect
        if (docs.modifiedCount === 0)
        {
            //if the username entered is not in the database, the code below is executed
            res.send({'msg': 'Record could not be found/updated. Check that correct data is added and try again! (Case sensitive)'});
        }
        else
        {
            res.send({'msg': 'Record updated'});
        }
    })
}

exports.deleteDivision = (req, res) =>
{
    const usr = req.body.username;
    const div = req.body.div;
    const ou = req.body.ou;

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
}

exports.deleteOu = (req, res) =>
{
    const usr = req.body.username;
    const ou = req.body.ou;

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
}

exports.addDivision = (req, res) =>
{
    const usr = req.body.username;
    const ou = req.body.ou;
    const div = req.body.divisions;

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
}

exports.addOu = (req, res) =>
{
    const usr = req.body.username;
    const ou = req.body.ou;

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
}

exports.updateAdmin = (req, res) =>
{
    const usr = req.body.username;
    const admin = req.body.admin;

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
}

exports.managerUpdate = (req, res) =>
{
    const usr = req.body.username;
    const manager = req.body.manager;

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
}

exports.divisionsCredentials = (req, res) =>
{
    const div = req.body.division;
    
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
}