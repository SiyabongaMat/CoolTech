import React from "react";

class AddOu extends React.Component
{
    render (props)
    {
        let status = this.props.status;
        let message = this.props.msg;
        if (status === 200)
        {
            return (
                <div>
                    <h2>Select OU to insert to record</h2>
                    <fieldset>
                        <form onSubmit={ this.props.insertOu }>
                            <label>Enter username of user to update: </label>
                            <input type='text' name='username'></input>
                            <fieldset>
                            <legend>Select OU to delete</legend>
                                <label htmlFor='ou-a'> <input onChange={ this.props.ouSelector } id='ou-a' type='radio' name='ou' value='News Management'></input> News Management </label>
                                <label htmlFor='ou-b'> <input onChange={ this.props.ouSelector } id='ou-b' type='radio' name='ou' value='Software Reviews'></input> Software Reviews </label>
                                <label htmlFor='ou-c'> <input onChange={ this.props.ouSelector } id='ou-c' type='radio' name='ou' value='Hardware Reviews'></input> Hardware Reviews </label>
                                <label htmlFor='ou-d'> <input onChange={ this.props.ouSelector } id='ou-d' type='radio' name='ou' value='Opinion Pieces'></input> Opinion Pieces </label>
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

export default AddOu;