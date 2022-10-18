import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

class Signup extends React.Component
{
    render (props)
    {
        return (
            <div>
                <h2 style={{'textAlign': 'center'}}>Create new account</h2>
                <Form onSubmit={ this.props.signUpHandle } style={{'marginLeft': '250px'}}>
                    <Form.Group as={Row} className='mb-3'>
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={5}>
                            <Form.Control type='text' name='usr'></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3'>
                        <Form.Label column sm={2}>Password</Form.Label>
                        <Col sm={5}>
                            <Form.Control type='password' name='pwd'></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3'>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type='submit'>Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Signup;