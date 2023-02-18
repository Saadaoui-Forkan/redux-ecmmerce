import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { userAccount } from '../../features/slices/userSlice'
import './login.css'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImg] = useState("")

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(userAccount({name,password,image}))
    }
  return (
    <div className='login'>
        <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
        >
            <Form.Control 
                type="text" 
                placeholder="Username" 
                value = {name}  
                onChange = {(e)=> setName(e.target.value)}
            />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value = {password}
                    onChange = {(e)=> setPassword(e.target.value)} 
                />
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="Image Web Link"
            className="img-url"
        >
            <Form.Control 
                type="text" 
                placeholder="Image Web Link" 
                value = {image}
                onChange = {(e)=> setImg(e.target.value)}
            />
        </FloatingLabel>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={handleClick}
        >create account</button>
    </div>
  )
}

export default Login
