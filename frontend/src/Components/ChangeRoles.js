import React from "react";

class ChangeRoles extends React.Component
{
    render(props)
    {
        let status = this.props.status;
        let msg = this.props.msg;

        if (status === 200)
        {
            return (
                <div>
                    <h1>{ msg.msg }</h1>
                    <h2>Change user permissions</h2>
                    <fieldset>
                        <form onSubmit={ this.props.managerChange }>
                            <label>Enter username of user to update: </label>
                            <input type='text' name='username'></input>
                            <fieldset>
                            <legend>Change user manager status: </legend>
                                <label htmlFor='managertrue'> <input onChange={ this.props.managerRadioChange } type='radio' id='managertrue' name='manager' value='true'></input> True </label>
                                <label htmlFor='managerfalse'> <input onChange={ this.props.managerRadioChange } type='radio' id='managerfalse' name='manager' value='false'></input> False </label>
                            </fieldset>
                            <input type='submit' value='Submit'></input>
                        </form>
                        <h4>{ this.props.managerMessage.msg }</h4>
                    </fieldset>

                    <fieldset>
                        <form onSubmit={ this.props.adminChange }>
                            <label>Enter username of user to update: </label>
                            <input type='text' name='username'></input>
                            <fieldset>
                            <legend>Change user admin status: </legend>
                                <label htmlFor='admintrue'> <input onChange={ this.props.adminRadioChange } type='radio' id='admintrue' name='admin' value='true'></input> True </label>
                                <label htmlFor='adminfalse'> <input onChange={ this.props.adminRadioChange } type='radio' id='adminfalse' name='admin' value='false'></input> False </label>
                            </fieldset>
                            <input type='submit' value='Submit'></input>
                        </form>
                        <h4>{ this.props.adminMessage.msg }</h4>
                    </fieldset>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <h3>{ msg.msg }</h3>
                </div>
            )
        }
    }
}

export default ChangeRoles;