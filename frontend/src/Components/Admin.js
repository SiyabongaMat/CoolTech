import React from "react";

class AdminDashboard extends React.Component
{
    render (props)
    {
        const status = this.props.status;
        const message = this.props.resp;
        if (status === 200)
        {
            return (
                <div>
                    <h1>{ message.msg }</h1>
                    <h2>Add new role to user</h2>
                    <fieldset>
                        <form onSubmit={ this.props.submit }>
                            <label>Enter username of user to update: </label>
                            <input type='text' name='user'></input>
                            
                            <fieldset>
                                <legend>New Management OU and divisions</legend>
                                <label htmlFor='writ'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Writing'></input> Writing </label>
                                <label htmlFor='edit'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Editing'></input> Editing </label>
                                <label htmlFor='publish'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Publishing'></input> Publishing </label>
                                <label htmlFor='fin'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Finance'></input> Finance </label>
                                <label htmlFor='it'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='IT'></input> IT </label>
                                <label htmlFor='content'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Content Manager'></input> Content Manager </label>
                                <label htmlFor='social'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Social Media'></input> Social Media </label>
                                <label htmlFor='market'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Marketing'></input> Marketing </label>
                                <label htmlFor='graphic'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Graphics'></input> Graphics </label>
                                <label htmlFor='analyst'> <input onChange={ this.props.newsChange } type='checkbox' name='News Management' value='Business Analyst'></input> Business Analyst </label>
                            </fieldset>

                            <fieldset>
                                <legend>Software Reviews OU and divisions</legend>
                                <label htmlFor='writ'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Writing'></input> Writing </label>
                                <label htmlFor='edit'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Editing'></input> Editing </label>
                                <label htmlFor='publish'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Publishing'></input> Publishing </label>
                                <label htmlFor='fin'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Finance'></input> Finance </label>
                                <label htmlFor='it'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='IT'></input> IT </label>
                                <label htmlFor='content'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Content Manager'></input> Content Manager </label>
                                <label htmlFor='social'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Social Media'></input> Social Media </label>
                                <label htmlFor='market'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Marketing'></input> Marketing </label>
                                <label htmlFor='graphic'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Graphics'></input> Graphics </label>
                                <label htmlFor='analyst'> <input onChange={this.props.softwareChange} type='checkbox' name='Software Reviews' value='Business Analyst'></input> Business Analyst </label>
                            </fieldset>

                            <fieldset>
                                <legend>Hardware Reviews OU and divisions</legend>
                                <label htmlFor='writ'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Writing'></input> Writing </label>
                                <label htmlFor='edit'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Editing'></input> Editing </label>
                                <label htmlFor='publish'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Publishing'></input> Publishing </label>
                                <label htmlFor='fin'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Finance'></input> Finance </label>
                                <label htmlFor='it'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='IT'></input> IT </label>
                                <label htmlFor='content'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Content Manager'></input> Content Manager </label>
                                <label htmlFor='social'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Social Media'></input> Social Media </label>
                                <label htmlFor='market'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Marketing'></input> Marketing </label>
                                <label htmlFor='graphic'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Graphics'></input> Graphics </label>
                                <label htmlFor='analyst'> <input onChange={this.props.hardwareChange} type='checkbox' name='Hardware Reviews' value='Business Analyst'></input> Business Analyst </label>
                            </fieldset>

                            <fieldset>
                                <legend>Opinion Pieces OU and divisions</legend>
                                <label htmlFor='writ'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Writing'></input> Writing </label>
                                <label htmlFor='edit'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Editing'></input> Editing </label>
                                <label htmlFor='publish'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Publishing'></input> Publishing </label>
                                <label htmlFor='fin'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Finance'></input> Finance </label>
                                <label htmlFor='it'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='IT'></input> IT </label>
                                <label htmlFor='content'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Content Manager'></input> Content Manager </label>
                                <label htmlFor='social'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Social Media'></input> Social Media </label>
                                <label htmlFor='market'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Marketing'></input> Marketing </label>
                                <label htmlFor='graphic'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Graphics'></input> Graphics </label>
                                <label htmlFor='analyst'> <input onChange={this.props.opinionChange} type='checkbox' name='Opinion Pieces' value='Business Analyst'></input> Business Analyst </label>
                            </fieldset>

                            <input type='submit' value='Submit'></input>
                        </form>
                    </fieldset>
                    <h3>{ this.props.message.msg }</h3>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <h3>{ message.msg }</h3>
                </div>
            );
        }
    }
}

export default AdminDashboard;