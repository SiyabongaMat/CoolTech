//Program to manage the backend of a blogging site

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ManagerAuth from './Components/Manager';
import AdminDashboard from './Components/Admin';
import UpdateRoles from './Components/UpdateRole';
import DeleteRoles from './Components/DeleteRole';
import AddOu from './Components/Insert';
import ChangeRoles from './Components/ChangeRoles';
import ViewDivisions from './Components/View';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      insertbtn: false,
      updatebtn: false,
      deletebtn: false,
      adminbtn: false,
      managerbtn: false,
      permissionbtn: false,
      updatecredbtn: false,
      viewcredbtn: false,
      signup: '',
      login: '',
      data: '',
      stat: '',
      manager: '',
      admin: '',
      adminstat: '',
      update: '',
      updateOu: '',
      updateDivs: [],
      deleteOu: '',
      insertRoleMsg: '',
      deleteDivMsg: '',
      deleteOuMsg: '',
      updateDivMsg: '',
      insertOuMsg: '',
      selectedOu: '',
      managerperm: '',
      managermsg: '',
      adminperm: '',
      adminmsg: '',
      checkedDiv: '',
      divisionOutput: '',
      news: {ou: '', divisions: []},
      software: {ou: '', divisions: []},
      hardware: {ou: '', divisions: []},
      opinion: {ou: '', divisions: []}
    };

    //list of all the methods to be executed
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.checkManager = this.checkManager.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.checkAdmin = this.checkAdmin.bind(this);
    this.handleNewsChange = this.handleNewsChange.bind(this);
    this.handleSoftwareChange = this.handleSoftwareChange.bind(this);
    this.adminSubmit = this.adminSubmit.bind(this);
    this.handleHardwareChange = this.handleHardwareChange.bind(this);
    this.handleOpinionChange = this.handleOpinionChange.bind(this);
    this.handleDivisionChange = this.handleDivisionChange.bind(this);
    this.handleOuChange = this.handleOuChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.ouDelChange = this.ouDelChange.bind(this);
    this.handleOuSubmit = this.handleOuSubmit.bind(this);
    this.adminInsertRole = this.adminInsertRole.bind(this);
    this.adminUpdateRole = this.adminUpdateRole.bind(this);
    this.adminDeleteRole = this.adminDeleteRole.bind(this);
    this.handleOuSelection = this.handleOuSelection.bind(this);
    this.handleInsertOu = this.handleInsertOu.bind(this);
    this.permissionsBtn = this.permissionsBtn.bind(this);
    this.handleManagerPermission = this.handleManagerPermission.bind(this);
    this.handleAdminPermission = this.handleAdminPermission.bind(this);
    this.adminRoleSubmit = this.adminRoleSubmit.bind(this);
    this.managerRoleSubmit = this.managerRoleSubmit.bind(this);
    this.editCredsBtn = this.editCredsBtn.bind(this);
    this.showDivisionCreds = this.showDivisionCreds.bind(this);
    this.divisionSelected = this.divisionSelected.bind(this);
    this.showDivision = this.showDivision.bind(this);
  }

  //function below is executed to check the credentials of each division
  showDivision (e)
  {
    e.preventDefault();
    const obj = {
      division: this.state.checkedDiv
    }

    fetch('/divisioncreds',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ divisionOutput: data }));
  }

  divisionSelected (e)
  {
    //if radio button is clicked 'onchange', the value is set to state and used to call the api in the method above
    if (e.target.checked)
      this.setState({ checkedDiv: e.target.value });
  }

  //both 'showDivisionCreds' and 'editCredsBtn' are set contrary to their state value onclick
  showDivisionCreds ()
  {
    this.setState(prevState => ({ viewcredbtn: !prevState.viewcredbtn }))
  }

  editCredsBtn ()
  {
    this.setState(prevState => ({ updatecredbtn: !prevState.updatecredbtn }))
  }

  //code below changes a users' admin status
  adminRoleSubmit (e)
  {
    e.preventDefault();
    //data is taken from the 'ChangeRoles' component
    const obj = {
      username: e.target.username.value,
      admin: this.state.adminperm
    }

    fetch('/adminchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ adminmsg: data }));
  }

  managerRoleSubmit (e)
  {
    //code below changes a users' manager status
    e.preventDefault();
    const obj = {
      username: e.target.username.value,
      manager: this.state.managerperm
    }

    fetch('/managerchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ managermsg: data }));
  }

  handleAdminPermission (e)
  {
    //onchange of radio button, the checked value is set to state
    if (e.target.checked)
      this.setState({ adminperm: e.target.value });
  }

  handleManagerPermission (e)
  {
    //onchange of radio button, the checked value is set to state
    if (e.target.checked)
      this.setState({ managerperm: e.target.value });
  }

  //onclick of button, state is set opposite its value for conditional rendering
  permissionsBtn ()
  {
    this.setState(prevState => ({ permissionbtn: !prevState.permissionbtn }));
  }

  handleInsertOu (e)
  {
    //function to update user record with new OU
    e.preventDefault();

    const obj = {
      username: e.target.username.value,
      ou: this.state.selectedOu
    }
    
    fetch ('/add-ou', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ insertOuMsg: data }));
  }

  handleOuSelection (e)
  {
    //onchange, the ou selected from radio button is set to state
    if (e.target.checked)
      this.setState({ selectedOu: e.target.value });
  }

  //'adminDeleteRole', 'adminUpdateRole', 'adminInsertRole' change the state value for conditional rendering
  adminDeleteRole ()
  {
    this.setState(prevState => ({ deletebtn: !prevState.deletebtn }));
  }

  adminUpdateRole ()
  {
    this.setState(prevState => ({ updatebtn: !prevState.updatebtn }));
  }

  adminInsertRole ()
  {
    this.setState(prevState =>({ insertbtn: !prevState.insertbtn }));
  }

  handleOuSubmit (e)
  {
    //function to delete ou from user repository
    e.preventDefault();
    const obj = {
      username: e.target.username.value,
      ou: this.state.deleteOu
    }

    fetch ('/delete-ou', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ deleteOuMsg: data }))
  }

  ouDelChange (e)
  {
    //the checked ou to be deleted from radio button is set to state onchange
    if (e.target.checked)
      this.setState({ deleteOu: e.target.value });
  }

  handleUpdateSubmit (e)
  {
    //method below adds division to users ou divisions
    e.preventDefault();

    const obj = {
      username: e.target.username.value,
      ou: this.state.updateOu,
      divisions: this.state.updateDivs
    };

    fetch ('/add-div', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ updateDivMsg: data }));
  }

  handleOuChange (e)
  {
    //onchange of ou, state is set, and value is used to query which division in ou to delete in the method above 
    if (e.target.checked)
      this.setState({ updateOu: e.target.value });
  }

  handleDivisionChange (e)
  {
    //code below handle onchange of division checkbox
    if (e.target.checked)
      //state array is set with each checkbox clicked
      this.setState({ updateDivs: [...this.state.updateDivs, e.target.value] });
    else
      //setstate below removes any duplicate divisions clicked
      this.setState({ updateDivs: this.state.updateDivs.filter(d => d !== e.target.value) });
  }

  adminSubmit (e)
  //method below adds new ou and divisions (if it was empty before) to database
  {
    e.preventDefault();
    //new roles array is set
    const roles = [];

    if (Object.keys(this.state.news.divisions).length !== 0)
      roles.push(this.state.news)
    
    if (this.state.software.divisions.length !== 0)
      roles.push(this.state.software);

    if (this.state.hardware.divisions.length !== 0)
      roles.push(this.state.hardware);
    
    if (this.state.opinion.divisions.length !== 0)
      roles.push(this.state.opinion);

      //whichever state array without zero is pushed to roles array initialized in line 293

    let obj = {
      arr: roles,
      name: e.target.user.value
    }

    //fetch api calls /addroles and passed obj as json object to mongodb server
    fetch('/addroles',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ insertRoleMsg: data }));
  }

  handleOpinionChange (e)
  {
    if (e.target.checked)
    //this sets the state object to the checkboxes clicked on in the Admin components
      this.setState({ opinion: { ...this.state.opinion, ou: e.target.name, divisions: [...this.state.opinion.divisions, e.target.value] } });
    else
    //removes all unchecked values from state object array
      this.setState({ opinion: { ...this.state.opinion, ou: e.target.name, divisions: this.state.opinion.divisions.filter(d => d !== e.target.value) } });
  }

  handleHardwareChange (e)
  {
    if(e.target.checked)
    //code below sets state object and array with the clicked checkbox value
      this.setState({ hardware: { ...this.state.hardware, ou: e.target.name, divisions: [...this.state.hardware.divisions, e.target.value] } });
    else
    //code below removes unchecked checkbox values from state object array
      this.setState({ hardware: { ...this.state.hardware, ou: e.target.name, divisions: this.state.hardware.divisions.filter(d => d !== e.target.value) } });
  }

  handleSoftwareChange (e)
  {
    if (e.target.checked)
    //code below sets state object and state object array with clicked checkboxes
      this.setState({ software: { ...this.state.software, ou: e.target.name, divisions: [...this.state.software.divisions, e.target.value] } });
    else
      this.setState({ software: { ...this.state.software, ou: e.target.name, divisions: this.state.software.divisions.filter(d => d !== e.target.value) } });
  }

  handleNewsChange (e)
  {
    if (e.target.checked)
      this.setState({ news: { ...this.state.news, ou: e.target.name, divisions: [...this.state.news.divisions, e.target.value] } });
    else
      this.setState({ news: { ...this.state.news, ou: e.target.name, divisions: this.state.news.divisions.filter(d => d !== e.target.value) } });
  }

  checkAdmin ()
  {
    //code below checks if user had admin rights and sets state with response and status value
    fetch('/authadmin', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + this.state.data.token
      }
    }).then(res => res.json().then(data => this.setState({ adminstat: res.status, admin: data })));

    //since code above is executed on button click, state is set opposite its value for conditional rendering
    this.setState(prevState => ({ adminbtn: !prevState.adminbtn }));
  }

  handleUpdate (e)
  {
    //code below updates credentials
    e.preventDefault();
    const usr = e.target.username.value;
    const newusr = e.target.newusername.value;
    const dataToUpdate = { usr, newusr };

    fetch('/update',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToUpdate)
    }).then(res => res.json()).then(data => this.setState({ update: data }));
  }

  checkManager ()
  {
    //code below checks if user has manager rights in the site
    fetch('/authcred',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.state.data.token
      }
    }).then(res => res.json().then(data => this.setState({ stat: res.status, manager: data })));

    //again since code above is executed on button click, state is set opposite its boolean value for conditional rendering
    this.setState(prevState => ({ managerbtn: !prevState.managerbtn }));
  }

  handleLogin (e)
  {
    e.preventDefault();

    //onsubmit values of form are retrieved and passed with fetch api to check if login information is correct
    let username = e.target.usr.value;
    let password = e.target.pwd.value;

    const obj = { username, password };

    fetch('/login', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ data: data }));
    //after calling the api, the response is set to state and the value is outputted in component
  }

  handleSignUp (e)
  {
    //code below handles signup of new user
    e.preventDefault();
    let username = e.target.usr.value;
    let password = e.target.pwd.value;

    const obj = { username, password }

    //api calls signup and passes object to server to create new server and output message is set to state
    fetch ('/signup',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => this.setState({ signup: data }));
  }
  
  render ()
  {
    return (
      <Router>
        <div>
          <Link to= '/'> <button>Home</button> </Link>
          <Link to = '/sign'> <button>Sign Up</button> </Link>
          <Link to = '/log'> <button>Login</button> </Link>

          <Routes>

            <Route exact path='/' element = { <img src={logo} className="App-logo" alt="logo" /> } />

            <Route path='/sign' element={<Signup signUpHandle = { this.handleSignUp } />} />

            <Route path='/log' element = {
              <div> 
                <Login  loginHandle = { this.handleLogin } /> 
                <br /> <br /> 
                <h4>{ this.state.data.msg }</h4>

                {this.state.data.token &&
                  <div>

                    <button onClick={ this.checkManager }>Manager Dashboard</button>
                    <button onClick={ this.checkAdmin }>Admin Dashboard</button>
                    <br /> <br />

                    {this.state.managerbtn &&
                      <div>
                          <button onClick={ this.editCredsBtn }>Update Credentials</button>
                          <button onClick={ this.showDivisionCreds }>View division credentials</button>

                          {this.state.updatecredbtn &&
                            <ManagerAuth 
                              response = { this.state.manager }
                              updateCredentials = { this.handleUpdate }
                              resStatus = { this.state.stat }
                              message = { this.state.update }
                            />
                          }

                          {this.state.viewcredbtn &&
                            <ViewDivisions
                              resStatus = { this.state.stat }
                              response = { this.state.manager }
                              divChange = { this.divisionSelected }
                              divisionView = { this.showDivision }
                              output = { this.state.divisionOutput }
                            />
                          }
                      </div>
                    }

                    {this.state.adminbtn &&
                      <div>
                        <button onClick={ this.adminInsertRole }>Add new role</button>
                        <button onClick={ this.adminUpdateRole }>Update role</button>
                        <button onClick={ this.adminDeleteRole }>Delete from database</button>
                        <button onClick={ this.permissionsBtn }>Change user permissions</button>

                        {this.state.permissionbtn &&
                          <ChangeRoles
                            status = { this.state.adminstat }
                            msg = { this.state.admin }
                            adminRadioChange = { this.handleAdminPermission }
                            managerRadioChange = { this.handleManagerPermission }
                            adminChange = { this.adminRoleSubmit }
                            managerChange = { this.managerRoleSubmit }
                            adminMessage = { this.state.adminmsg }
                            managerMessage = { this.state.managermsg }
                          />
                        }

                        {this.state.insertbtn &&
                          <AdminDashboard
                            resp = { this.state.admin }
                            status = { this.state.adminstat }
                            submit = { this.adminSubmit }
                            newsChange = { this.handleNewsChange }
                            softwareChange = { this.handleSoftwareChange }
                            hardwareChange = { this.handleHardwareChange }
                            opinionChange = { this.handleOpinionChange }
                            message = { this.state.insertRoleMsg }
                          />
                        }

                        {this.state.updatebtn &&
                          <div>
                            <UpdateRoles 
                              status = { this.state.adminstat }
                              msg = { this.state.admin }
                              divChange = { this.handleDivisionChange }
                              ouAdd = { this.handleOuChange }
                              updateSubmission = { this.handleUpdateSubmit }
                              message = { this.state.updateDivMsg }
                            />

                            <AddOu
                              status = { this.state.adminstat }
                              msg = { this.state.admin }
                              message = { this.state.insertOuMsg }
                              ouSelector = { this.handleOuSelection }
                              insertOu = { this.handleInsertOu }
                            />
                          </div>
                        }

                        {this.state.deletebtn &&
                          <DeleteRoles
                            status = { this.state.adminstat }
                            msg = { this.state.admin }
                            delOu = { this.ouDelChange }
                            deleteOu = { this.handleOuSubmit }
                            message = { this.state.deleteOuMsg }
                          />
                        }
                      </div>
                    }

                  </div> 
                }
              </div> 
            } />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
