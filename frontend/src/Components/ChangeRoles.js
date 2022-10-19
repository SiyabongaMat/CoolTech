import React from "react";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

class ChangeRoles extends React.Component
{
    render(props)
    {
        let status = this.props.status;
        let msg = this.props.msg;

        if (status === 200)
        {
            return (
                <div style={{'marginTop': '25px'}}>
                    <h1 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>{ msg.msg }</h1>
                    <h2 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>Change user permissions</h2>

                    <Form onSubmit={ this.props.managerChange } style={{'marginLeft': '50px'}}>

                        <Form.Group as={Row} className='mb-3'>
                            <Form.Label column sm={3}>Enter username of user to update: </Form.Label>
                            <Col sm={6}>
                                <Form.Control type='text' name='username'></Form.Control>
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label as='legend' column sm={3}>Change user manager status: </Form.Label>
                                    <Col sm={6}>
                                        <Form.Check onChange={ this.props.managerRadioChange } label='True' type='radio' name='manager' value='true'></Form.Check>
                                        <Form.Check onChange={ this.props.managerRadioChange } label='False' type='radio' name='manager' value='false'></Form.Check>
                                    </Col>
                            </Form.Group>
                        </fieldset>
                        
                        <Form.Group as={Row} className='mb-3'>
                            <Col sm={{ span: 10, offset: 3 }}>
                                <Button type='submit'>Submit</Button>
                            </Col>
                        </Form.Group>

                    </Form>

                    {this.props.managerMessage &&
                        <Alert variant="info">{ this.props.managerMessage.msg }</Alert>
                    }

                    <Form onSubmit={ this.props.adminChange } style={{'marginLeft': '50px'}}>

                        <Form.Group as={Row} className='mb-3'>
                            <Form.Label column sm={3}>Enter username of user to update: </Form.Label>
                            <Col sm={6}>
                                <Form.Control type='text' name='username'></Form.Control>
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label as='legend' column sm={3}>Change user admin status: </Form.Label>
                                    <Col sm={6}>
                                        <Form.Check onChange={ this.props.adminRadioChange } label='True' type='radio' name='admin' value='true'></Form.Check>
                                        <Form.Check onChange={ this.props.adminRadioChange } label='False' type='radio'  name='admin' value='false'></Form.Check>
                                    </Col>
                            </Form.Group>
                        </fieldset>
                        
                        <Form.Group as={Row} className='mb-3'>
                            <Col sm={{ span: 10, offset: 3 }}>
                                <Button type='submit'>Submit</Button>
                            </Col>
                        </Form.Group>

                    </Form>

                    {this.props.adminMessage &&
                        <Alert style={{'width': '1000px', 'textAlign': 'center'}} variant="info">{ this.props.adminMessage.msg }</Alert>
                    }

                </div>
            );
        }
        else
        {
            return (
                <div>
                    <Alert style={{'width': '1000px', 'textAlign': 'center'}} variant="danger">{ msg.msg }</Alert>
                </div>
            )
        }
    }
}

export default ChangeRoles;