import React from "react";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

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
                <div style={{'marginLeft': '50px', 'marginTop': '25px'}}>
                    <h1 style={{'textAlign': 'center', 'fontFamily': 'monospace'}}>{ res.msg }</h1>
                    <Form onSubmit={ this.props.divisionView }>

                        <fieldset>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label as='legend' column sm={3}>Select division repository to views: </Form.Label>
                                    <Col sm={3}>
                                        <Form.Check onChange={ this.props.divChange } label='Writing' type='radio' name='division' value='Writing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Editing' type='radio' name='division' value='Editing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Publishing' type='radio' name='division' value='Publishing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Finance' type='radio' name='division' value='Finance'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='IT' type='radio' name='division' value='IT'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Content Manager' type='radio' name='division' value='Content Manager'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Social Media' type='radio' name='division' value='Social Media'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Marketting' type='radio' name='division' value='Marketing'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Graphics' type='radio' name='division' value='Graphics'></Form.Check>
                                        <Form.Check onChange={ this.props.divChange } label='Business Analyst' type='radio' name='division' value='Business Analyst'></Form.Check>
                                    </Col>
                            </Form.Group>
                        </fieldset>

                        <Form.Group as={Row} className='mb-3'>
                            <Col sm={{ span: 10, offset: 3 }}>
                                <Button type='submit'>Submit</Button>
                            </Col>
                        </Form.Group>

                    </Form>

                    {this.props.output &&
                        <Alert>{ out }</Alert>
                    }

                </div>
            );
        }
    }
}

export default ViewDivisions;