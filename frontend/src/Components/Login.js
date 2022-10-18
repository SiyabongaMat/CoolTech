import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

class Login extends React.Component
{
    render (props)
    {
        return (
            <div className='login'>
                <h2>Login into your account</h2>
                <Form onSubmit={ this.props.loginHandle }>
                    <Row className='align-items-center'>
                        <Col xs='auto'>
                            <Form.Control type='text' placeholder='Enter username...' name='usr'></Form.Control>
                        </Col>

                        <Col xs='auto'>
                            <Form.Control type='password' placeholder='Enter password...' name='pwd'></Form.Control>
                        </Col>
                        
                        <Col xs='auto'>
                            <Button type='submit'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default Login;