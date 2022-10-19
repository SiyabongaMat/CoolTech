import React from "react";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

class AdminDashboard extends React.Component
{
    render (props)
    {
        const status = this.props.status;
        const message = this.props.resp;
        if (status === 200)
        {
            return (
                <div style={{'marginLeft': '50px', 'marginTop': '25px'}}>
                    <h1 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>{ message.msg }</h1>
                    <h2 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>Add new role to user</h2>

                    <Form onSubmit={ this.props.submit }>

                        <Form.Group as={Row} className='mb-3'>
                            <Form.Label column sm={3}>Enter username of user to update: </Form.Label>
                            <Col sm={6}>
                                <Form.Control type='text' name='user'></Form.Control>
                            </Col>
                        </Form.Group>
                            
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as='legend' column sm={3}>New Management OU and divisions</Form.Label>
                                        <Col sm={3}>
                                            <Form.Check onChange={ this.props.newsChange } label='Writing' type='checkbox' name='News Management' value='Writing'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Editing' type='checkbox' name='News Management' value='Editing'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Publishing' type='checkbox' name='News Management' value='Publishing'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Finance' type='checkbox' name='News Management' value='Finance'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='IT' type='checkbox' name='News Management' value='IT'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Content Manager' type='checkbox' name='News Management' value='Content Manager'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Social Media' type='checkbox' name='News Management' value='Social Media'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Marketting' type='checkbox' name='News Management' value='Marketing'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Graphics' type='checkbox' name='News Management' value='Graphics'></Form.Check>
                                            <Form.Check onChange={ this.props.newsChange } label='Business Analyst' type='checkbox' name='News Management' value='Business Analyst'></Form.Check>
                                        </Col>
                                </Form.Group>
                            </fieldset>

                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as='legend' column sm={3}>Software Reviews OU and divisions</Form.Label>
                                        <Col sm={3}>
                                            <Form.Check onChange={this.props.softwareChange} label='Writing' type='checkbox' name='Software Reviews' value='Writing'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Editing' type='checkbox' name='Software Reviews' value='Editing'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Publishing' type='checkbox' name='Software Reviews' value='Publishing'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Finance' type='checkbox' name='Software Reviews' value='Finance'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='IT' type='checkbox' name='Software Reviews' value='IT'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Content Manager' type='checkbox' name='Software Reviews' value='Content Manager'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Social Media' type='checkbox' name='Software Reviews' value='Social Media'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Marketting' type='checkbox' name='Software Reviews' value='Marketing'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Graphics' type='checkbox' name='Software Reviews' value='Graphics'></Form.Check>
                                            <Form.Check onChange={this.props.softwareChange} label='Business Analyst' type='checkbox' name='Software Reviews' value='Business Analyst'></Form.Check>
                                        </Col>
                                </Form.Group>
                            </fieldset>

                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as='legend' column sm={3}>Hardware Reviews OU and divisions</Form.Label>
                                        <Col sm={3}>
                                            <Form.Check onChange={this.props.hardwareChange} label='Writing' type='checkbox' name='Hardware Reviews' value='Writing'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Editing' type='checkbox' name='Hardware Reviews' value='Editing'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Publishing' type='checkbox' name='Hardware Reviews' value='Publishing'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Finance' type='checkbox' name='Hardware Reviews' value='Finance'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='IT' type='checkbox' name='Hardware Reviews' value='IT'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Content Manager' type='checkbox' name='Hardware Reviews' value='Content Manager'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Social Media' type='checkbox' name='Hardware Reviews' value='Social Media'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Marketting' type='checkbox' name='Hardware Reviews' value='Marketing'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Graphics' type='checkbox' name='Hardware Reviews' value='Graphics'></Form.Check>
                                            <Form.Check onChange={this.props.hardwareChange} label='Business Analyst' type='checkbox' name='Hardware Reviews' value='Business Analyst'></Form.Check>
                                        </Col>
                                </Form.Group>
                            </fieldset>

                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as='legend' column sm={3}>Opinion Pieces OU and divisions</Form.Label>
                                        <Col sm={3}>
                                            <Form.Check onChange={this.props.opinionChange} label='Writing' type='checkbox' name='Opinion Pieces' value='Writing'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Editing' type='checkbox' name='Opinion Pieces' value='Editing'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Publishing' type='checkbox' name='Opinion Pieces' value='Publishing'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Finance' type='checkbox' name='Opinion Pieces' value='Finance'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='IT' type='checkbox' name='Opinion Pieces' value='IT'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Content Manager' type='checkbox' name='Opinion Pieces' value='Content Manager'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Social Media' type='checkbox' name='Opinion Pieces' value='Social Media'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Marketting' type='checkbox' name='Opinion Pieces' value='Marketing'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Graphics' type='checkbox' name='Opinion Pieces' value='Graphics'></Form.Check>
                                            <Form.Check onChange={this.props.opinionChange} label='Business Analyst' type='checkbox' name='Opinion Pieces' value='Business Analyst'></Form.Check>
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
                <div>
                    <Alert style={{'width': '1000px', 'textAlign': 'center'}} variant="danger">{ message.msg }</Alert>
                </div>
            );
        }
    }
}

export default AdminDashboard;