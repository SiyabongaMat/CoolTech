import React from "react";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

class AddOu extends React.Component
{
    render (props)
    {
        let status = this.props.status;
        let message = this.props.msg;
        if (status === 200)
        {
            return (
                <div style={{'marginLeft': '50px'}}>
                    <h1 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>{ message.msg }</h1>
                    <h2 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>Select OU to insert to record</h2>
                    <Form onSubmit={ this.props.insertOu }>

                        <Form.Group as={Row} className='mb-3'>
                            <Form.Label column sm={2}>Enter username of user to update: </Form.Label>
                            <Col sm={6}>
                                <Form.Control type='text' name='username'></Form.Control>
                            </Col>
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label as='legend' column sm={3}>Select OU to delete</Form.Label>
                                    <Col sm={6}>
                                        <Form.Check onChange={ this.props.ouSelector } label='News Management' type='radio' name='ou' value='News Management'></Form.Check>
                                        <Form.Check onChange={ this.props.ouSelector } label='Software Reviews' type='radio' name='ou' value='Software Reviews'></Form.Check>
                                        <Form.Check onChange={ this.props.ouSelector } label='Hardware Reviews' type='radio' name='ou' value='Hardware Reviews'></Form.Check>
                                        <Form.Check onChange={ this.props.ouSelector } label='Opinion Pieces' type='radio' name='ou' value='Opinion Pieces'></Form.Check>
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
                        <Alert variant="info">{ this.props.message.msg }</Alert>
                    }

                </div>
            )
        }
        else
        {
            return (
                <div>
                    <Alert variant="danger">{ message.msg }</Alert>
                </div>
            )
        }
    }
}

export default AddOu;