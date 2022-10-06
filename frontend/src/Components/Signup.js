import React from 'react';

class Signup extends React.Component
{
    render (props)
    {
        return (
            <div>
                <h2>Create new account</h2>
                <form onSubmit={ this.props.signUpHandle }>
                    <label>Enter your name: </label>
                    <input type='text' name='usr'></input>
                    <label>Enter your password: </label>
                    <input type='password' name='pwd'></input>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        );
    }
}

export default Signup;