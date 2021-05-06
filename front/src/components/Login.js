import React from 'react';
import { Form, Col, Button } from "react-bootstrap";

export default function Login() {
    return (
        <div style={container}>
            <div style={textBox}>
                <div style={title}>Login</div>
                <div>
                    <Form className="main-form">
                        <Form.Row>
                        <Form.Group as={Col} controlId="email">
                            <Form.Row>
                                <Form.Label className="form-label" style={text}>Email:</Form.Label>
                            </Form.Row>
                            <Form.Row>
                                <Form.Control
                                className="form-input"
                                name="email"
                                type="email"
                                placeholder="Enter an email"
                                style={bar}
                                />
                            </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="password">
                            <Form.Row>
                                <Form.Label className="form-label" style={text}>Password:</Form.Label>
                            </Form.Row>
                            <Form.Row>
                                <Form.Control
                                className="form-input"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                style={bar}
                                />
                            </Form.Row>
                        </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" style={button}>
                        Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

const container = {
    display: "flex",
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    height: "800px",
    font: "inherit",
    backgroundColor: "#F1EC40",
    alignItems: "center",
    justifyContent: "center"
}

const textBox = {
    color: "white",
    backgroundColor: "black",
    width: "60%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const title = {
    width: "206px",
    height: "40px",
    fontFamily: "Avenir",
    fontSize: "40px",
    fontWeight: "900",
}

const text = {
    width: "70%",
    fontFamily: "Avenir",
    fontSize: "30px",
    lineHeight: "1.56",
    marginBottom: "15px"
}

const bar = {
    width: "300px",
    fontFamily: "Avenir",
    fontSize: "20px",
    lineHeight: "1.56",
    marginBottom: "15px"
}

const button = {
    width: "100px",
    height: "35px",
    marginTop: "20px",
    ontFamily: "Avenir",
    fontSize: "20px",
}
