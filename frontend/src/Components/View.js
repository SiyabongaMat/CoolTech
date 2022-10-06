import React from "react";

class ViewDivisions extends React.Component
{
    render(props)
    {
        let status = this.props.resStatus;
        let res = this.props.response;
        let out = this.props.output.msg;

        if (status === 200)
        {
            return (
                <div>
                    <h1>{ res.msg }</h1>
                    <fieldset>
                        <form onSubmit={ this.props.divisionView }>
                            <fieldset>
                                <legend>Select division repository to views: </legend>
                                <label htmlFor='writ'> <input onChange={ this.props.divChange } type='radio' name='division' value='Writing'></input> Writing </label>
                                <label htmlFor='edit'> <input onChange={ this.props.divChange } type='radio' name='division' value='Editing'></input> Editing </label>
                                <label htmlFor='publish'> <input onChange={ this.props.divChange } type='radio' name='division' value='Publishing'></input> Publishing </label>
                                <label htmlFor='fin'> <input onChange={ this.props.divChange } type='radio' name='division' value='Finance'></input> Finance </label>
                                <label htmlFor='it'> <input onChange={ this.props.divChange } type='radio' name='division' value='IT'></input> IT </label>
                                <label htmlFor='content'> <input onChange={ this.props.divChange } type='radio' name='division' value='Content Manager'></input> Content Manager </label>
                                <label htmlFor='social'> <input onChange={ this.props.divChange } type='radio' name='division' value='Social Media'></input> Social Media </label>
                                <label htmlFor='market'> <input onChange={ this.props.divChange } type='radio' name='division' value='Marketing'></input> Marketing </label>
                                <label htmlFor='graphic'> <input onChange={ this.props.divChange } type='radio' name='division' value='Graphics'></input> Graphics </label>
                                <label htmlFor='analyst'> <input onChange={ this.props.divChange } type='radio' name='division' value='Business Analyst'></input> Business Analyst </label>
                            </fieldset>
                            <input type='submit' value='Submit'></input>
                        </form>
                    </fieldset>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody style={{'backgroundColor': 'blue'}}>
                            <tr>
                                <td>{ out }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default ViewDivisions;