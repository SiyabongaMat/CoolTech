import React from "react";

class ManagerAuth extends React.Component
{
    render (props)
    {
        let status = this.props.resStatus;
        let res = this.props.response;

        if (status === 200)
        {
            return (
                <div>
                    <h1>{ res.msg }</h1>
                    <h2>Update credentials</h2>
                    <fieldset>
                        <form onSubmit={ this.props.updateCredentials }>
                            <label>Enter username to update: </label>
                            <input type='text' name='username'></input>
                            <label>Enter new username: </label>
                            <input type='text' name='newusername'></input>
                            <input type='submit' value='Submit'></input>
                        </form>
                    </fieldset>
                    <p>{ this.props.message.msg }</p>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <p>{ res.msg }</p>
                </div>
            );
        }
    }
}

export default ManagerAuth;