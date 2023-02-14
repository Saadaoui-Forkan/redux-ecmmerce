import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './login.css'

function Login() {
  return (
    <div className='login'>
        <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
        >
            <Form.Control type="text" placeholder="Username" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="Image Url"
            className="img-url"
        >
            <Form.Control type="text" placeholder="Image Url" />
        </FloatingLabel>
    </div>
  )
}

export default Login
