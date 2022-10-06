import React from 'react';

class Login extends React.Component
{
    render (props)
    {
        return (
            <div>
                <h2>Login into your account</h2>
                <form onSubmit={ this.props.loginHandle }>
                    <input type='text' placeholder='Enter username...' name='usr'></input>
                    <input type='password' placeholder='Enter password...' name='pwd'></input>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        );
    }
}

export default Login;