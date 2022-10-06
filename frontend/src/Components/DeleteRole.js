import React from "react";

class DeleteRoles extends React.Component
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
                    <h2>Delete Division from OU</h2>
                    <fieldset>
                        <form onSubmit={ this.props.deleteOu }>
                            <label>Enter username of user to update: </label>
                            <input type='text' name='username'></input>
                            <fieldset>
                            <legend>Select OU to delete</legend>
                                <label htmlFor='role-a'> <input onChange={ this.props.delOu } id='role-a' type='radio' name='ou' value='News Management'></input> News Management </label>
                                <label htmlFor='role-b'> <input onChange={ this.props.delOu } id='role-b' type='radio' name='ou' value='Software Reviews'></input> Software Reviews </label>
                                <label htmlFor='role-c'> <input onChange={ this.props.delOu } id='role-c' type='radio' name='ou' value='Hardware Reviews'></input> Hardware Reviews </label>
                                <label htmlFor='role-d'> <input onChange={ this.props.delOu } id='role-d' type='radio' name='ou' value='Opinion Pieces'></input> Opinion Pieces </label>
                            </fieldset>
                            <input type='submit' value='Submit'></input>
                        </form>
                    </fieldset>
                    <h3>{ this.props.message.msg }</h3>
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <h3>{ message.msg }</h3>
                </div>
            )
        }
    }
}

export default DeleteRoles;