import React from "react";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap'

class UpdateRoles extends React.Component
{
    render (props)
    {
        let status = this.props.status;
        let message = this.props.msg;
        if (status === 200)
        {
            return (
                <div style={{'marginLeft': '50px', 'marginTop': '25px'}}>
                    <h1 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>{ message.msg }</h1>
                    <h2 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>Add new division(s) to user OU roles</h2>

                    <Form onSubmit={ this.props.updateSubmission }>

                        <Form.Group as={Row} className='mb-3'>
                            <Form.Label column sm={2}>Enter username of user to update: </Form.Label>
                            <Col sm={6}>
                                <Form.Control type='text' name='username'></Form.Control>
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label as='legend' column sm={3}>Select OU to update database</Form.Label>
                                    <Col sm={3}>
                                        <Form.Check onChange={ this.props.ouAdd } label='News Management' type='radio' name='ou' value='News Management'></Form.Check>
                                        <Form.Check onChange={ this.props.ouAdd } label='Software Reviews' type='radio' name='ou' value='Software Reviews'></Form.Check>
                                        <Form.Check onChange={ this.props.ouAdd } label='Hardware Reviews' type='radio' name='ou' value='Hardware Reviews'></Form.Check>
                                        <Form.Check onChange={ this.props.ouAdd } label='Opinion Pieces' type='radio' name='ou' value='Opinion Pieces'></Form.Check>
                                    </Col>
                            </Form.Group>
                        </fieldset>

                        <fieldset>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label as='legend' column sm={3}>Select Division(s) to add to database</Form.Label>
                                    <Col sm={3}>
                                        <Form.Check onChange={ this.props.divChange } label='Writing' type='checkbox' name='News Management' value='Writing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Editing' type='checkbox' name='News Management' value='Editing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Publishing' type='checkbox' name='News Management' value='Publishing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Finance' type='checkbox' name='News Management' value='Finance'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='IT' type='checkbox' name='News Management' value='IT'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Content Manager' type='checkbox' name='News Management' value='Content Manager'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Social Media' type='checkbox' name='News Management' value='Social Media'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Marketting' type='checkbox' name='News Management' value='Marketing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Graphics' type='checkbox' name='News Management' value='Graphics'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Business Analyst' type='checkbox' name='News Management' value='Business Analyst'></Form.Check>
                                    </Col>
                            </Form.Group>
                        </fieldset>

                        <Form.Group as={Row} className='mb-3'>
                                <Col sm={{ span: 10, offset: 3 }}>
                                    <Button type='submit'>Submit</Button>
                                </Col>
                        </Form.Group>
                    </Form>

                    {this.props.message &&
                        <Alert style={{'width': '1000px', 'textAlign': 'center'}} variant="info">{ this.props.message.msg }</Alert>
                    }

                </div>
            );
        }
        else
        {
            return (
                <Alert style={{'width': '1000px', 'textAlign': 'center'}} variant="danger">{ message.msg }</Alert>
            )
        }
    }
}

export default UpdateRoles;