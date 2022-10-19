import React from "react";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

class ManagerAuth extends React.Component
{
    render (props)
    {
        let status = this.props.resStatus;
        let res = this.props.response;

        if (status === 200)
        {
            return (
                <div style={{'marginLeft': '50px', 'marginTop': '25px'}}>

                    <h1 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>{ res.msg }</h1>
                    <h2 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>Update credentials</h2>

                    <Form onSubmit={ this.props.updateCredentials }>

                        <Form.Label column sm={3}>Enter username to update: </Form.Label>
                        <Col sm={6}>
                            <Form.Control type='text' name='username'></Form.Control>
                        </Col>

                        <Form.Label column sm={3}>Enter new username: </Form.Label>
                        <Col sm={6}>
                            <Form.Control type='text' name='newusername'></Form.Control>
                        </Col>
                        
                        <Form.Group as={Row} className='mb-3' style={{'marginTop': '15px'}}>
                            <Col sm={{ span: 10 }}>
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
                    <Alert style={{'width': '1000px', 'textAlign': 'center'}} variant="danger">{ res.msg }</Alert>
                </div>
            );
        }
    }
}

export default ManagerAuth;