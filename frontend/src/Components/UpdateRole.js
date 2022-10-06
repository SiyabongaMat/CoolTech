import React from "react";

class UpdateRoles extends React.Component
{
    render (props)
    {
        let status = this.props.status;
        let message = this.props.msg;
        if (status === 200)
        {
            return (
                <div>
                    <h1>{ message.msg }</h1>
                    <h2>Add new division(s) to user OU roles</h2>
                    <fieldset>
                        <form onSubmit={ this.props.updateSubmission }>

                            <label>Enter username of user to update: </label>
                            <input type='text' name='username'></input>

                            <fieldset>
                            <legend>Select OU to update database</legend>
                                <label htmlFor='role-a'> <input onChange={ this.props.ouAdd } id='role-a' type='radio' name='ou' value='News Management'></input> News Management </label>
                                <label htmlFor='role-b'> <input onChange={ this.props.ouAdd } id='role-b' type='radio' name='ou' value='Software Reviews'></input> Software Reviews </label>
                                <label htmlFor='role-c'> <input onChange={ this.props.ouAdd } id='role-c' type='radio' name='ou' value='Hardware Reviews'></input> Hardware Reviews </label>
                                <label htmlFor='role-d'> <input onChange={ this.props.ouAdd } id='role-d' type='radio' name='ou' value='Opinion Pieces'></input> Opinion Pieces </label>
                            </fieldset>

                            <fieldset>
                            <legend>Select Division(s) to add to database</legend>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Writing'></input> Writing </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Editing'></input> Editing </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Publishing'></input> Publishing </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Finance'></input> Finance </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='IT'></input> IT </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Content Manager'></input> Content Manager </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Social Media'></input> Social Media </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Marketing'></input> Marketing </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Graphics'></input> Graphics </label>
                                <label> <input onChange={ this.props.divChange } type='checkbox' name='News Management' value='Business Analyst'></input> Business Analyst </label>
                            </fieldset>

                            <input type='submit' value='Submit'></input>
                        </form>
                    </fieldset>
                    <h3>{ this.props.message.msg }</h3>
                </div>
            );
        }
    }
}

export default UpdateRoles;